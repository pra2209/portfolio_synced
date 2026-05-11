import { eq, desc } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, writingPosts, projects, githubProjects } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

/**
 * Writing Posts Queries
 */
export async function getWritingPosts(category?: string) {
  const db = await getDb();
  if (!db) return [];

  try {
    if (category && category !== "all") {
      return await db.select().from(writingPosts).where(eq(writingPosts.category, category as any)).orderBy(desc(writingPosts.publishedAt));
    }
    return await db.select().from(writingPosts).orderBy(desc(writingPosts.publishedAt));
  } catch (error) {
    console.error("[Database] Failed to get writing posts:", error);
    return [];
  }
}

export async function getWritingPostById(id: number) {
  const db = await getDb();
  if (!db) return undefined;

  try {
    const result = await db.select().from(writingPosts).where(eq(writingPosts.id, id)).limit(1);
    return result.length > 0 ? result[0] : undefined;
  } catch (error) {
    console.error("[Database] Failed to get writing post:", error);
    return undefined;
  }
}

export async function createWritingPost(post: typeof writingPosts.$inferInsert) {
  const db = await getDb();
  if (!db) return undefined;

  try {
    const result = await db.insert(writingPosts).values(post);
    return result;
  } catch (error) {
    console.error("[Database] Failed to create writing post:", error);
    throw error;
  }
}

/**
 * Projects Queries
 */
export async function getProjects(featured?: boolean) {
  const db = await getDb();
  if (!db) return [];

  try {
    if (featured) {
      return await db.select().from(projects).where(eq(projects.featured, true)).orderBy(projects.order);
    }
    return await db.select().from(projects).orderBy(projects.order);
  } catch (error) {
    console.error("[Database] Failed to get projects:", error);
    return [];
  }
}

export async function getProjectById(id: string) {
  const db = await getDb();
  if (!db) return undefined;

  try {
    const result = await db.select().from(projects).where(eq(projects.id, id)).limit(1);
    return result.length > 0 ? result[0] : undefined;
  } catch (error) {
    console.error("[Database] Failed to get project:", error);
    return undefined;
  }
}

export async function createProject(project: typeof projects.$inferInsert) {
  const db = await getDb();
  if (!db) return undefined;

  try {
    const result = await db.insert(projects).values(project);
    return result;
  } catch (error) {
    console.error("[Database] Failed to create project:", error);
    throw error;
  }
}

/**
 * GitHub Projects Queries
 */
export async function getGitHubProjects(featured?: boolean) {
  const db = await getDb();
  if (!db) return [];

  try {
    if (featured) {
      return await db.select().from(githubProjects).where(eq(githubProjects.featured, true)).orderBy(githubProjects.order);
    }
    return await db.select().from(githubProjects).orderBy(githubProjects.order);
  } catch (error) {
    console.error("[Database] Failed to get GitHub projects:", error);
    return [];
  }
}

export async function getGitHubProjectById(id: string) {
  const db = await getDb();
  if (!db) return undefined;

  try {
    const result = await db.select().from(githubProjects).where(eq(githubProjects.id, id)).limit(1);
    return result.length > 0 ? result[0] : undefined;
  } catch (error) {
    console.error("[Database] Failed to get GitHub project:", error);
    return undefined;
  }
}

export async function createGitHubProject(project: typeof githubProjects.$inferInsert) {
  const db = await getDb();
  if (!db) return undefined;

  try {
    const result = await db.insert(githubProjects).values(project);
    return result;
  } catch (error) {
    console.error("[Database] Failed to create GitHub project:", error);
    throw error;
  }
}
