import Script from 'next/script';
import '../styles/globals.scss';
import 'animate.css';
import type { AppProps } from 'next/app';
// eslint-disable-next-line import/no-unresolved
import SideNavProvider from '../providers/SideNavProvider';

const MyApp = ({ Component, pageProps }: AppProps) => (
	<>
		<Script id="google-tag-manager" strategy="afterInteractive">
			{`
       (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	   new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	   j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	   'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	   })(window,document,'script','dataLayer','GTM-N8PC2W8');
      `}
		</Script>
		<SideNavProvider>
			<Component {...pageProps} />
		</SideNavProvider>
	</>
);

export default MyApp;
