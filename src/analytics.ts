declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID = "G-E0NT9QE8H1";

/**
 * Initialize GA4 (ensures configuration is set if gtag is loaded)
 */
export const initGA = () => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('config', GA_MEASUREMENT_ID);
  }
};

/**
 * Track custom GA4 events
 * @param eventName Name of the event (e.g. 'rsvp_click', 'game_click')
 * @param parameters Event parameters/dimensions
 */
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, string | number | boolean | undefined>
) => {
  try {
    if (typeof window !== 'undefined') {
      if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, parameters);
      } else {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: eventName, ...parameters });
      }
    }
  } catch (err) {
    // Fail silently in development/blocked environments
    console.debug('[GA4] trackEvent failed:', err);
  }
};
