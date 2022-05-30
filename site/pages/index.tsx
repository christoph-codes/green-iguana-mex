import type { NextPage } from 'next';
import Container from '../components/Container';
import Section from '../components/Section';
import Row from '../components/Row';
import Button from '../components/Button';
import Footer from '../components/Footer';
import iguana from '../assets/images/iguana.svg';
import MenuItem from '../components/MenuItem';
import PageTemplate from '../templates/Page';
import greenIguanaSEO from '../assets/images/gim-seo_image.png';
import homeHero from '../assets/images/home-hero.png';
import { toastTabLink } from '../util/navLinks';
import styles from './home/Home.module.scss';

const Home: NextPage = (): any => (
	<PageTemplate
		metaData={{
			title: 'Green Iguana Mexican Restaurant | St. George Utah',
			description:
				'Green Iguana Mexican Restaurant is a down-to-earth, family-owned eatery serving hearty, familiar Mexican plates, plus beer & margaritas.',
			image: greenIguanaSEO,
		}}
		className={styles.Home}
	>
		<Section
			className={`${styles.Home__hero} 🔥bg-primary`}
			bgImg={homeHero}
		>
			<Row columns={{ xs: [8, 4] }} align="center" noGap>
				<article className={styles.Home__hero__text}>
					<h1>Welcome Home</h1>
					<p>
						Down-to-earth, family-owned eatery serving hearty,
						familiar Mexican plates, plus beer & margaritas.
					</p>
				</article>
				<article
					className={`${styles.Home__hero__welcome_card} 🔥bg-white 🔥p-2`}
				>
					<h2>Come Visit Us Today!</h2>
					<p>
						Place your order online or checkout our menu before you
						come visit us!
					</p>
					<Button fullWidth href={toastTabLink}>
						Order Online
					</Button>
					<Button variant="tertiary-outline" fullWidth href="/menu">
						View Menu
					</Button>
				</article>
			</Row>
		</Section>
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
	</PageTemplate>
);

export default Home;
