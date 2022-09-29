import type { NextPage } from 'next';
import Image from 'next/image';
import Container from '../components/Container';
import Section from '../components/Section';
import Row from '../components/Row';
import Button from '../components/Button';
import PageTemplate from '../templates/Page';
import homeHero from '../assets/images/home-hero.png';
import { toastTabLink } from '../util/navLinks';
import CategoryItem from '../components/CategoryItem/CategoryItem';
import specials from '../util/menu/_specials';
// Images
import margaritas from '../assets/images/gim_margaritas.png';
import mangoMargarita from '../assets/images/gim_mango_marg.png';
import shrimp from '../assets/images/gim_shrimp.png';
import shreddedBeef from '../assets/images/gim_shredded_beef.png';
// Styles
import styles from './home/Home.module.scss';

const Home: NextPage = (): any => (
	<PageTemplate
		metaData={{
			title: 'Green Iguana Mexican Restaurant | St. George Utah',
			description:
				'Green Iguana Mexican Restaurant is a down-to-earth, family-owned eatery serving hearty, familiar Mexican plates, plus beer & margaritas.',
		}}
		className={styles.Home}
	>
		<Section
			className={`${styles.Home__hero} 🔥bg-primary`}
			bgImg={homeHero}
		>
			<Row columns={{ xs: [12, 12], md: [8, 4] }} align="center">
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
					<Button fullWidth href={toastTabLink} target="_blank">
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
				<Row columns={{ xs: [12, 12, 12], md: [3, 3, 3] }}>
					<p>
						850 S Bluff Street
						<br />
						St. George, UT 84770
					</p>
					<p>
						Monday - Saturday @ 11am - 9pm <br />
						Closed on Sundays
					</p>
					<p>
						Phone Number <br />
						435-628-4863
					</p>
				</Row>
			</Container>
		</div>
		<Section>
			<Row
				columns={{ xs: [6, 6, 6, 6], md: [3, 3, 3, 3] }}
				className={styles.Home__gallery}
			>
				<Image
					className={styles.Home__gallery__item}
					src={margaritas}
					alt="Margaritas from Green Iguana Mexican Restaurant"
				/>
				<Image
					className={styles.Home__gallery__item}
					src={shrimp}
					alt="Shrimp Plate from Green Iguana Mexican Restaurant"
				/>
				<Image
					className={styles.Home__gallery__item}
					src={mangoMargarita}
					alt="Mango Margarita from Green Iguana Mexican Restaurant"
				/>
				<Image
					className={styles.Home__gallery__item}
					src={shreddedBeef}
					alt="Shredded Beef Plate from Green Iguana Mexican Restaurant"
				/>
			</Row>
		</Section>
		<CategoryItem
			className={`${styles.Home__hero} 🔥bg-offwhite`}
			category={specials}
		/>
		<Section className="🔥pt-0">
			<Button className="🔥mx-auto" href="/menu" variant="secondary">
				View Menu
			</Button>
		</Section>
	</PageTemplate>
);

export default Home;
