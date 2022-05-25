import '../styles/globals.scss';
import 'animate.css';
import type { AppProps } from 'next/app';
// eslint-disable-next-line import/no-unresolved
import SideNavProvider from '../providers/SideNavProvider';

const MyApp = ({ Component, pageProps }: AppProps) => (
	<SideNavProvider>
		<Component {...pageProps} />
	</SideNavProvider>
);

export default MyApp;
