// Uncomment the blocks below and replace the placeholder IDs with your real values.
// GA_MEASUREMENT_ID  — found in Google Analytics > Admin > Data Streams (format: G-XXXXXXXXXX)
// GTM_CONTAINER_ID   — found in Google Tag Manager > Admin > Container settings (format: GTM-XXXXXXX)
// META_PIXEL_ID      — found in Meta Events Manager > Data Sources (numeric ID)

// import Script from "next/script";

export function AnalyticsPlaceholders() {
  return (
    <>
      {/* ─── Google Analytics 4 (direct) ────────────────────────────────────────
      Replace GA_MEASUREMENT_ID with your actual Measurement ID (e.g. G-ABC123XYZ).

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
      ─────────────────────────────────────────────────────────────────────────── */}

      {/* ─── Google Tag Manager (alternative to direct GA4) ─────────────────────
      Replace GTM_CONTAINER_ID with your actual Container ID (e.g. GTM-ABC1234).
      Also add the <noscript> snippet inside <body> in app/layout.tsx.

      <Script id="gtm-init" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM_CONTAINER_ID');
        `}
      </Script>
      ─────────────────────────────────────────────────────────────────────────── */}

      {/* ─── Meta Pixel ─────────────────────────────────────────────────────────
      Replace META_PIXEL_ID with your numeric Pixel ID (e.g. 1234567890123456).

      <Script id="meta-pixel-init" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'META_PIXEL_ID');
          fbq('track', 'PageView');
        `}
      </Script>
      ─────────────────────────────────────────────────────────────────────────── */}
    </>
  );
}
