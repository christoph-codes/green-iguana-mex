import type { NextPage } from 'next';
import Container from '../components/Container';
import Section from '../components/Section';
import Row from '../components/Row';
import Button from '../components/Button';
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
			<Row columns={{ xs: [12, 12], md: [8, 4] }} align="center" noGap>
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
		<div className={styles.Home__actions}>
			<Container>
				<Row>
					<p>
						850 S Bluff Street
						<br />
						St. George, UT 84770
					</p>
					<p>
						Tuesday - Saturday @ 11am - 9pm <br />
						Sunday @ 11am - 8pm
					</p>
					<p>
						Phone Number <br />
						435-628-4863
					</p>
				</Row>
			</Container>
		</div>
		<Section
			className={`${styles.Home__hero} 🔥bg-offwhite`}
			title="Green Iguana Plato Especiales"
			description="All plates served with Rice, Beans, Lettuce, Pico, Guacomole,
			Sour Cream, and Corn or Flour Tortillas **Do not include
			Tortillas"
		>
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
			<Button
				href="/menu"
				className="🔥mx-auto 🔥mt-2"
				variant="secondary"
			>
				View Menu
			</Button>
		</Section>
	</PageTemplate>
);

export default Home;
