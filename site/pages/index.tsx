import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Container from '../components/Container';
import styles from '../styles/Home.module.scss';

const Home: NextPage = (): any => (
	<div className={styles.container}>
		<Head>
			<title>Create Next App</title>
			<meta name="description" content="Generated by create next app" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<Container className="🔥bg-secondary">
			<h3>Hello Bro!</h3>
		</Container>

		<main className="🔥bg-offwhite">
			<Container>
				<h1 className="animate__animated animate__bounce 🔥b-primary">
					Welcome to Green Iguana
				</h1>
				<p style={{ width: '50%' }} className="🔥mt-6">
					Get started by editing this block of code over and over but
					I have to make sure that everything is good before I approve
					of this font size.{' '}
					<code className={styles.code}>pages/index.tsx</code>
					<a href="https://nextjs.org">
						Next.js! Longer title to see how it wraps
					</a>
				</p>
				<div className="🔥d-flex 🔥d-md-block 🔥align-center 🔥justify-center">
					<h2 className="animate__animated animate__bounce 🔥ml-auto 🔥p-2 🔥bg-primary 🔥bg-md-tertiary 🔥bg-lg-secondary 🔥text-white">
						Welcome to Green Iguana
					</h2>
					<ul style={{ width: '50%' }} className="🔥text-sm-tertiary">
						<li>Hello bro</li>
						<li>Hello gal</li>
						<li>Hello mama</li>
						<ul>
							<li>Hello dada</li>
							<li>Hello sister</li>
						</ul>
						<li>Hello grandma</li>
					</ul>
				</div>
				<h3 className="animate__animated animate__bounce">
					Welcome to Green Iguana
				</h3>
				<p style={{ width: '50%' }} className="🔥text-right">
					Get started by editing this block of code over and over but
					I have to make sure that everything is good before I approve
					of this font size.{' '}
					<code className={styles.code}>pages/index.tsx</code>
				</p>
				<h4 className="animate__animated animate__bounce 🔥my-6">
					Welcome to Green Iguana
				</h4>
				<p style={{ width: '50%' }} className="🔥px-4 🔥text-center">
					Get started by editing this block of code over and over but
					I have to make sure that everything is good before I approve
					of this font size.{' '}
					<code className={styles.code}>pages/index.tsx</code>
				</p>
				<h5 className="animate__animated animate__bounce 🔥text-tertiary">
					Welcome to Green Iguana
				</h5>
				<p style={{ width: '50%' }} className={styles.description}>
					Get started by editing this block of code over and over but
					I have to make sure that everything is good before I approve
					of this font size.{' '}
					<code className={styles.code}>pages/index.tsx</code>
				</p>
				<h6 className="animate__animated animate__bounce">
					Welcome to Green Iguana
				</h6>

				<p style={{ width: '50%' }} className="🔥text-primary">
					Get started by editing this block of code over and over but
					I have to make sure that everything is good before I approve
					of this font size.{' '}
					<code className={styles.code}>pages/index.tsx</code>
				</p>
			</Container>
		</main>

		<footer className={styles.footer}>
			<a
				href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
				target="_blank"
				rel="noopener noreferrer"
			>
				Powered by{' '}
				<span className={styles.logo}>
					<Image
						src="/vercel.svg"
						alt="Vercel Logo"
						width={72}
						height={16}
					/>
				</span>
			</a>
		</footer>
	</div>
);

export default Home;
