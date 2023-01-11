import { ReactNode, FC } from 'react';
import { useRouter } from 'next/router';
import { StaticImageData } from 'next/image';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import iguana from '../../assets/images/iguana.svg';
import { headerLinks, footerLinks } from '../../util/navLinks';
import styles from './Page.module.scss';
import AnnouncementBar from '../../components/AnnouncementBar/AnnouncementBar';

export type PageProps = {
	className?: string;
	metaData: {
		title: string;
		description: string;
		image?: string | StaticImageData | any;
	};
	children: ReactNode;
};
/**
 * 'Page Template: Use this template to establish the Green Iguana layout and structure of all `pages`.'
 */
const PageTemplate: FC<PageProps> = ({
	className,
	metaData = {
		title: 'Green Iguana Mexican Restaurant in St. George Utah',
		image: '/gim-seo_image.png',
		description:
			'Down-to-earth, family-owned eatery serving hearty, familiar Mexican plates, plus beer & margaritas.',
	},
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
				<link href="/favicon.ico" rel="shortcut icon" />

				{url && <link href={canonical} rel="canonical" />}
				<meta content="en_US" property="og:locale" />
				<meta content={metaData.title} property="og:title" />
				<meta
					content={metaData.description}
					property="og:description"
				/>
				<meta content={canonical} property="og:url" />
				<meta content="/gim-seo_image.png" property="og:image" />
				<meta content="summary_large_image" name="twitter:card" />
				<meta content={metaData.description} property="og:image:alt" />
			</Head>
			<AnnouncementBar>
				Temporarily Closed Due To Construction. Reopening Soon!
			</AnnouncementBar>
			<Header sticky links={headerLinks} />
			<main className={`${styles.PageTemplate} ${className}`}>
				{children}
			</main>
			<Footer img={iguana} links={footerLinks} />
		</>
	);
};

export default PageTemplate;
