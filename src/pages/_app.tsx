import Script from 'next/script';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { appWithTranslation } from 'next-i18next';
import { SWRConfig } from 'swr';

import '../styles/globals.css';
import '../styles/semantic/semantic.min.css';
import { ActiveProductProvider } from '@context/ActiveProduct';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-2MGC929Z61" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2MGC929Z61');`}
      </Script>
      <SessionProvider session={pageProps.session}>
        <SWRConfig
          value={{
            // refreshInterval: 3000,
            fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
          }}
        >
          <ActiveProductProvider>
            <Component {...pageProps} />
          </ActiveProductProvider>
        </SWRConfig>
      </SessionProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
