/**
 * Analytics utility for GA4 event tracking
 * Tracks user interactions and scroll depth
 */

// Initialize GA4 if measurement ID is available
export function initializeGA4(measurementId?: string) {
  if (!measurementId) return;

  // GA4 initialization would happen here
  // For now, we provide a stub that can be connected to gtag
  console.log(`GA4 initialized with measurement ID: ${measurementId}`);
}

// Track custom events
export function trackEvent(
  eventName: string,
  eventData?: Record<string, string | number | boolean>
) {
  // Send to GA4 via gtag if available
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, eventData);
  }

  // Also log for debugging
  console.log(`Event tracked: ${eventName}`, eventData);
}

// Track CTA clicks
export function trackCTAClick(ctaName: string, section: string) {
  trackEvent("cta_click", {
    cta_name: ctaName,
    section: section,
  });
}

// Track case study opens
export function trackCaseStudyOpen(projectId: string, projectTitle: string) {
  trackEvent("case_study_open", {
    project_id: projectId,
    project_title: projectTitle,
  });
}

// Track GitHub clicks
export function trackGitHubClick(projectName: string) {
  trackEvent("github_click", {
    project_name: projectName,
  });
}

// Track email clicks
export function trackEmailClick() {
  trackEvent("email_click", {
    action: "email_cta_clicked",
  });
}

// Track LinkedIn clicks
export function trackLinkedInClick(section: string) {
  trackEvent("linkedin_click", {
    section: section,
  });
}

// Generate UTM-tracked LinkedIn URL
export function getLinkedInURLWithUTM(baseUrl: string, source: string = "portfolio", medium: string = "link", campaign: string = "pranav-portfolio") {
  const url = new URL(baseUrl);
  url.searchParams.set("utm_source", source);
  url.searchParams.set("utm_medium", medium);
  url.searchParams.set("utm_campaign", campaign);
  return url.toString();
}

// Track scroll depth
export function initializeScrollDepthTracking() {
  if (typeof window === "undefined") return;

  const scrollThresholds = [25, 50, 75, 100];
  const trackedThresholds = new Set<number>();

  window.addEventListener("scroll", () => {
    const scrollPercentage =
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    scrollThresholds.forEach((threshold) => {
      if (scrollPercentage >= threshold && !trackedThresholds.has(threshold)) {
        trackedThresholds.add(threshold);
        trackEvent("scroll_depth", {
          depth_percentage: threshold,
        });
      }
    });
  });
}

// Initialize all analytics on page load
export function initializeAnalytics(ga4MeasurementId?: string) {
  initializeGA4(ga4MeasurementId);
  initializeScrollDepthTracking();
}
