import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
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
import Nobr from '../components/Nobr';

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
					<h2 className="🔥text-tertiary">Under Construction!</h2>
					<p>
						As we are under construction, we are making some changes
						you will love but cant share yet. In the meantime check
						out our new menu!
					</p>
					{/* <p>
						Place your order online or checkout our menu before you
						come visit us in <Nobr>St. George!</Nobr>
					</p> */}
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
						<br />
						Located in the Red Lion Hotel
					</p>
					<p>
						Hours:
						<br />
						Monday - Saturday @ 11am - 9pm <br />
						Closed on Sundays
					</p>
					<p>
						Contact: <br />
						Phone Number: 435-628-4863
						<br />
						<Link href={toastTabLink}>Order Online</Link>
					</p>
				</Row>
			</Container>
		</div>
		<Section className="🔥pb-0">
			<Row
				columns={{ xs: [6, 6, 6, 6], md: [3, 3, 3, 3] }}
				className={`${styles.Home__gallery}`}
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
		<Section title="New Menu" className="🔥pb-2">
			<p className="🔥text-center 🔥pb-2 🔥pt-1">
				View our new menu as things are changing to feature your
				favorite dishes. <br />3 Easy steps to ordering to get you to
				enjoy your meal sooner!
			</p>
			<div className={styles.Home__newMenu}>
				<article className={`${styles.Home__newMenu__step} `}>
					<h3>Step 1:</h3>
					<h2>Choose Your Entree</h2>
				</article>
				<article className={`${styles.Home__newMenu__step} `}>
					<h3>Step 2:</h3>
					<h2>Choose Your Protein</h2>
				</article>
				<article className={`${styles.Home__newMenu__step} `}>
					<h3>Step 3:</h3>
					<h2>Choose Your Extras</h2>
				</article>
			</div>
		</Section>

		<Section className="🔥pt-0">
			<Button className="🔥mx-auto" href="/menu" variant="tertiary">
				View New Menu
			</Button>
		</Section>
		{/* <CategoryItem
			className={`${styles.Home__hero} 🔥bg-offwhite`}
			category={specials}
		/> */}
	</PageTemplate>
);

export default Home;
