/**
 * SEO and metadata utilities for portfolio
 */

export interface SEOMetadata {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
}

export function setSEOMetadata(metadata: SEOMetadata) {
  // Set page title
  document.title = metadata.title;

  // Set or update meta tags
  setMetaTag("description", metadata.description);
  setMetaTag("og:title", metadata.title);
  setMetaTag("og:description", metadata.description);
  setMetaTag("og:type", metadata.type || "website");

  if (metadata.image) {
    setMetaTag("og:image", metadata.image);
    setMetaTag("twitter:image", metadata.image);
  }

  if (metadata.url) {
    setMetaTag("og:url", metadata.url);
    setCanonical(metadata.url);
  }

  // Twitter Card
  setMetaTag("twitter:card", "summary_large_image");
  setMetaTag("twitter:title", metadata.title);
  setMetaTag("twitter:description", metadata.description);
}

function setMetaTag(name: string, content: string) {
  let element = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);

  if (!element) {
    element = document.createElement("meta");
    if (name.startsWith("og:") || name.startsWith("twitter:")) {
      element.setAttribute("property", name);
    } else {
      element.setAttribute("name", name);
    }
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function setCanonical(url: string) {
  let canonical = document.querySelector('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", url);
}

/**
 * Structured data (JSON-LD) for rich snippets
 */
export function setStructuredData(data: Record<string, any>) {
  let script = document.querySelector('script[type="application/ld+json"]');

  if (!script) {
    script = document.createElement("script");
    script.setAttribute("type", "application/ld+json");
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
}

/**
 * Person schema for portfolio
 */
export function setPersonSchema(person: {
  name: string;
  title: string;
  description: string;
  image?: string;
  email?: string;
  sameAs?: string[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.title,
    description: person.description,
    url: "https://pranav.manus.space",
    ...(person.image && { image: person.image }),
    ...(person.email && { email: person.email }),
    ...(person.sameAs && { sameAs: person.sameAs }),
  };

  setStructuredData(schema);
}

/**
 * Article schema for case studies
 */
export function setArticleSchema(article: {
  headline: string;
  description: string;
  image?: string;
  datePublished?: string;
  author?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.headline,
    description: article.description,
    ...(article.image && { image: article.image }),
    ...(article.datePublished && { datePublished: article.datePublished }),
    ...(article.author && { author: { "@type": "Person", name: article.author } }),
  };

  setStructuredData(schema);
}

/**
 * Default SEO metadata for home page
 */
export const DEFAULT_SEO: SEOMetadata = {
  title: "Pranav Kumar Singh | AI Product Leader",
  description:
    "Lead PM at Freshworks building enterprise intelligence at the intersection of GenAI and analytics. Previously Walmart Search. Exploring Director/Principal PM roles at AI-first companies.",
  image: "/WhatsApp_Image_2026-05-11_at_07.03.22.jpeg",
  type: "website",
};
