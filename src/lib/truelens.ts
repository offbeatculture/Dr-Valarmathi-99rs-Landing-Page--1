declare global {
  interface Window {
    truelens?: {
      track?: (eventName: string, payload: Record<string, string>) => void;
    };
  }
}

export function trackLead(payload: Record<string, string | undefined>) {
  if (typeof window === "undefined" || !window.truelens?.track) return;

  const safePayload: Record<string, string> = {};

  Object.entries(payload).forEach(([key, value]) => {
    if (value && value.trim()) {
      safePayload[key] = value.trim();
    }
  });

  if (!safePayload.email && !safePayload.phone) {
    return;
  }

  window.truelens.track("lead", safePayload);
}
