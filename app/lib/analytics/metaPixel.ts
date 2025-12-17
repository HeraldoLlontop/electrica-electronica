declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

type MetaPixelStandardEvent = "Lead" | "Contact" | "ViewContent";

const isBrowser = globalThis.window !== undefined;

const getFbq = (): Window["fbq"] | undefined => {
  if (!isBrowser) return undefined;

  const fbq = globalThis.window.fbq;
  return typeof fbq === "function" ? fbq : undefined;
};

const trackPixelEvent = (
  event: MetaPixelStandardEvent,
  params?: Record<string, unknown>
) => {
  const fbq = getFbq();
  if (!fbq) return;

  if (params) {
    fbq("track", event, params);
  } else {
    fbq("track", event);
  }
};

export const trackLead = (source: string) => {
  trackPixelEvent("Lead", {
    content_name: source,
  });
};

export const trackViewContent = (contentName: string) => {
  trackPixelEvent("ViewContent", {
    content_name: contentName,
  });
};


