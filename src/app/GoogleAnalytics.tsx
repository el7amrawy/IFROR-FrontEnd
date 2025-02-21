'use client'; // Mark as a Client Component

import Script from 'next/script';

export function GoogleAnalytics() {
  const gaTrackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

  if (!gaTrackingId) {
    return null; // Do not render if GA ID is not set
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaTrackingId}');
        `}
      </Script>
    </>
  );
}