import { ReactNode, FC } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import iguana from '../../assets/images/iguana.svg';
import greenIguanaSEO from '../../assets/images/gim-seo_image.png';
import styles from './Page.module.scss';

export type PageProps = {
	className?: string;
	metaData: {
		title: string;
		description: string;
		image: string;
	};
	children: ReactNode;
};
/**
 * 'Page Template: Use this template to establish the Green Iguana layout and structure of all `pages`.'
 */
const PageTemplate: FC<PageProps> = ({
	className,
	metaData = { greenIguanaSEO },
	children,
}) => {
	const router = useRouter();
	const domain = 'https://greeniguanamex.com';
	const url = router && router.asPath ? router.asPath : undefined;
	const canonical = url && url === '/' ? domain : domain + url;
	return (
		<>
			<Head>
				<title>{metaData.title}</title>
				<meta charSet="utf-8" />
				<meta content="IE=edge" httpEquiv="X-UA-Compatible" />
				<meta
					content="width=device-width, initial-scale=1"
					name="viewport"
				/>
				{metaData.description && (
					<meta content={metaData.description} name="description" />
				)}
				<meta content="follow, index" name="robots" />
				<meta content="#0BAA6D" name="theme-color" />
				<meta content="#0BAA6D" name="msapplication-TileColor" />
				<meta
					content="/favicons/browserconfig.xml"
					name="msapplication-config"
				/>
				<link
					href="/favicon@3x.png"
					rel="apple-touch-icon"
					sizes="180x180"
				/>
				<link
					href="/favicon@2x.png"
					rel="icon"
					sizes="32x32"
					type="image/png"
				/>
				<link
					href="/favicon@3x.png"
					rel="icon"
					sizes="16x16"
					type="image/png"
				/>
				<link href="/favicons/site.webmanifest" rel="manifest" />
				<link
					color="#5bbad5"
					href="/favicons/safari-pinned-tab.svg"
					rel="mask-icon"
				/>
				<link href="/favicon.ico" rel="shortcut icon" />

				{url && <link href={canonical} rel="canonical" />}
				<meta content="en_US" property="og:locale" />
				<meta content={metaData.title} property="og:title" />
				<meta
					content={metaData.description}
					property="og:description"
				/>
				<meta content={canonical} property="og:url" />
				{/* <meta
					content='t28Kl2fGmZjIEgh6q3mGsf-7gGb8115VMQm1qbMMIKc'
					name='google-site-verification'
				/> */}
				{metaData.image && (
					<>
						<meta content={metaData.image} property="og:image" />
						<meta
							content={metaData.description}
							property="og:image:alt"
						/>
					</>
				)}
			</Head>
			<Header
				sticky
				links={[
					{ label: 'Menu', path: '/menu' },
					{ label: 'Catering', path: '/catering' },
					{ label: 'Locations', path: '/locations' },
					{
						path: 'https://facebook.com/green-iguana',
						icon: <FaFacebookF size={32} />,
					},
					{
						path: 'https://twitter.com/green-iguana',
						icon: <FaTwitter size={32} />,
					},
				]}
			/>
			<main className={`${styles.PageTemplate} ${className}`}>
				{children}
			</main>
			<Footer
				img={iguana}
				links={[
					{ label: 'Menu', path: '/menu' },
					{ label: 'Catering', path: '/catering' },
					{ label: 'Locations', path: '/locations' },
					{ label: 'Order Online', path: '/order-online' },
					{ label: 'Contact', path: '/contact' },
				]}
			/>
		</>
	);
};

export default PageTemplate;
