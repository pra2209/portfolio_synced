import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, boolean } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Writing posts table for portfolio
 * Stores blog posts, articles, and LinkedIn posts
 */
export const writingPosts = mysqlTable("writing_posts", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  excerpt: text("excerpt").notNull(),
  content: text("content"),
  category: mysqlEnum("category", [
    "all",
    "product",
    "ai",
    "wins",
    "podcasts",
  ]).notNull(),
  source: mysqlEnum("source", ["linkedin", "medium", "newsletter"]).notNull(),
  url: varchar("url", { length: 500 }).notNull(),
  publishedAt: timestamp("publishedAt").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type WritingPost = typeof writingPosts.$inferSelect;
export type InsertWritingPost = typeof writingPosts.$inferInsert;

/**
 * Projects table for portfolio
 * Stores case study projects with metrics and details
 */
export const projects = mysqlTable("projects", {
  id: varchar("id", { length: 100 }).primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  tagline: varchar("tagline", { length: 255 }).notNull(),
  company: varchar("company", { length: 100 }).notNull(),
  description: text("description").notNull(),
  challenge: text("challenge"),
  solution: text("solution"),
  outcome: text("outcome"),
  metrics: text("metrics"), // JSON array of { label, value }
  technologies: text("technologies"), // JSON array of tech names
  keyLearnings: text("keyLearnings"), // JSON array of learnings
  featured: boolean("featured").default(false),
  order: int("order").default(0),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Project = typeof projects.$inferSelect;
export type InsertProject = typeof projects.$inferInsert;

/**
 * GitHub projects table
 * Stores AI builder projects from GitHub
 */
export const githubProjects = mysqlTable("github_projects", {
  id: varchar("id", { length: 100 }).primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description").notNull(),
  tags: text("tags"), // JSON array of tech tags
  url: varchar("url", { length: 500 }).notNull(),
  featured: boolean("featured").default(false),
  order: int("order").default(0),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type GitHubProject = typeof githubProjects.$inferSelect;
export type InsertGitHubProject = typeof githubProjects.$inferInsert;
