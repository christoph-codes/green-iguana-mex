import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import Container from '../components/Container';
import Section from '../components/Section';
import Row from '../components/Row';
import styles from '../styles/Home.module.scss';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import iguana from '../assets/images/iguana.svg';
import MenuItem from '../components/MenuItem';

const Home: NextPage = (): any => (
	<div className={styles.container}>
		<Head>
			<title>Create Next App</title>
			<meta name="description" content="Generated by create next app" />
			<link rel="icon" href="/favicon.ico" />
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
		<Container>
			<MenuItem
				category="NEW"
				title="Green Iguana Plato Especiales**"
				description="Charbroiled Chicken Breast | Green Sauce | Tortilla Strips | Mixed Cheese | Pico | 
				Guacomole | Sour Cream | Rice | Fresh Veggies."
				price="12.99"
			/>
			<MenuItem
				title="Green Iguana Plato Especiales**"
				description="Charbroiled Chicken Breast | Green Sauce | Tortilla Strips | Mixed Cheese | Pico | 
				Guacomole | Sour Cream | Rice | Fresh Veggies."
				price="12.99"
			/>
			<MenuItem
				title="Green Iguana Plato Especiales**"
				description="Charbroiled Chicken Breast | Green Sauce | Tortilla Strips | Mixed Cheese | Pico | 
				Guacomole | Sour Cream | Rice | Fresh Veggies."
				price="12.99"
			/>
		</Container>
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

		<Section bgColor="offwhite">
			<h3>Hello Bro!</h3>
			<h1 className="animate__animated animate__bounce">
				Welcome to Green Iguana
			</h1>
			<p>
				Get started by editing this block of code over and over but I
				have to make sure that everything is good before I approve of
				this font size.{' '}
				<code className={styles.code}>pages/index.tsx</code>
				<a href="https://nextjs.org">
					Next.js! Longer title to see how it wraps
				</a>
			</p>
		</Section>
		<Section title="Hello Bro!" bgColor="offwhite" className="🔥pt-0">
			<Row align="center">
				<div className="🔥bg-primary">
					<p>Hello</p>
				</div>
				<div className="🔥bg-tertiary">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Cum odit voluptatem nulla tempore? Praesentium vitae
						laborum rem eius. Repudiandae ipsum tenetur dolorum
						earum saepe vero recusandae excepturi consectetur fugit
						modi.
					</p>
				</div>
				<div className="🔥bg-secondary">
					<p>Hello</p>
				</div>
			</Row>
		</Section>

		<main className="🔥bg-offwhite">
			<Container>
				<div className="🔥d-md-flex 🔥d-block 🔥align-center 🔥justify-center">
					<h2 className="animate__animated animate__bounce 🔥ml-auto 🔥p-2 🔥bg-primary 🔥bg-md-tertiary 🔥bg-lg-secondary 🔥text-white">
						Welcome to Green Iguana
					</h2>
					<Row>
						<Button>Primary!</Button>
						<Button variant="primary-outline">
							Primary Outline!
						</Button>
						<Button variant="secondary">Secondary!</Button>
						<Button variant="secondary-outline">
							Secondary Outline!
						</Button>
						<Button variant="tertiary">Tertiary!</Button>
						<Button variant="tertiary-outline">
							Tertiary Outline!
						</Button>
						<Button fullWidth>FullWidth!</Button>
						<Button href="/contact" fullWidth>
							HREF!
						</Button>
						<Button fullWidth>Primary!</Button>
					</Row>
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
