import type { NextPage } from 'next';
import Link from 'next/link';
import Container from '../components/Container';
import Section from '../components/Section';
import Row from '../components/Row';
import Button from '../components/Button';
import PageTemplate from '../templates/Page';
import homeHero from '../assets/images/home_hero_2_bg.png';
// import CategoryItem from '../components/CategoryItem/CategoryItem';
import hybridMenu from '../util/menu/hybridmenu';
// import specials from '../util/menu/_specials';

// Images
// import margaritas from '../assets/images/gim_margaritas.png';
// import mangoMargarita from '../assets/images/gim_mango_marg.png';
// import meal1 from '../assets/images/gim-catering.png';
// import meal2 from '../assets/images/gim-menu.png';
// import shrimp from '../assets/images/gim_shrimp.png';
// import shreddedBeef from '../assets/images/gim_shredded_beef.png';
// import plate1 from '../assets/images/plate1.jpg';
// import plate2 from '../assets/images/plate2.jpg';

// Styles
import styles from './home/Home.module.scss';
import menuStyles from './menu/MenuPage.module.scss';
import { address, hours, toastTabLink } from '../util/content';
import MenuItem from '../components/MenuItem/MenuItem';
// import Nobr from '../components/Nobr';

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
			<Row
				columns={{ xs: [12, 12], md: [6, 4] }}
				align="center"
				justify="between"
			>
				<article className={styles.Home__hero__text}>
					<h1>Welcome Home</h1>
					<p>
						Experience authentic Mexican flavors like never before
						with our new simplified menu.
					</p>
				</article>
				<article
					className={`${styles.Home__hero__welcome_card} 🔥bg-white 🔥p-2`}
				>
					<h2 className="🔥text-primary">Now Open!</h2>
					<p>
						We are now open for Dine-in and Takeout! Come visit us
						at our new location. <br />
						<strong>{address}</strong>
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
						Address: <br />
						{address}
					</p>
					<p>
						Hours:
						<br />
						{hours}
					</p>
					<p>
						Contact: <br />
						Phone Number: 435-628-4863
						<br />
						<span className={styles.Home__actions__ctaLinks}>
							<Link href={toastTabLink}>Order Online</Link>
							<Link href="/menu">View Menu</Link>
						</span>
					</p>
				</Row>
			</Container>
		</div>
		<Section className="🔥pb-0">
			<Row
				columns={{ xs: [12, 12, 12, 12], md: [3, 3, 3, 3] }}
				className={`${styles.Home__gallery}`}
			>
				<img
					className={styles.Home__gallery__item}
					src="/plate2.jpg"
					alt="Taco Plate from Green Iguana Mexican Restaurant"
				/>

				<img
					className={styles.Home__gallery__item}
					src="../plate1.jpg"
					alt="Enchilada Plate from Green Iguana Mexican Restaurant"
				/>

				<img
					className={styles.Home__gallery__item}
					src="/plate3.jpg"
					alt="Chimichanga Plate from Green Iguana Mexican Restaurant"
				/>

				<img
					className={styles.Home__gallery__item}
					src="/plate4.jpg"
					alt="Enchilada Plate with pepppers from Green Iguana Mexican Restaurant"
				/>
			</Row>
		</Section>
		{/* <Section title="New Menu" className="🔥pb-2">
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
		</Section> */}

		{/* <CategoryItem
			className={`${styles.Home__hero} 🔥bg-offwhite`}
			category={specials}
		/> */}
		<Section className="🔥pb-0">
			{hybridMenu.slice(0, 1).map((step, idx) => (
				<div key={idx} className={menuStyles.Menu__step}>
					<h3 className="🔥text-center">{step.title}</h3>
					{step.description && (
						<div className="🔥text-center">{step.description}</div>
					)}
					<div className={menuStyles.Menu__options}>
						{step.options.map((opt: any, index: number) => (
							<MenuItem
								className={menuStyles.Menu__options__option}
								key={index}
								title={opt.title}
								description={opt.description}
								price={opt.price}
							/>
						))}
					</div>
				</div>
			))}
		</Section>
		<Section className="🔥pt-0 🔥pb-1">
			<Button
				className="🔥mx-auto"
				href="/menu"
				variant="tertiary-outline"
			>
				View Full Menu
			</Button>
		</Section>
	</PageTemplate>
);

export default Home;
