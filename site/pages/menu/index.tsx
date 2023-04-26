import type { NextPage } from 'next';
import PageTemplate from '../../templates/Page';
import Section from '../../components/Section';
import styles from './MenuPage.module.scss';
// import menu from '../../util/menu';
import menuImg from '../../assets/images/gim-menu2.jpg';
// import { newMenuOptions } from '../../util/menu/newMenu';
import MenuItem from '../../components/MenuItem';
import hybridMenu from '../../util/menu/hybridmenu';

const MenuPage: NextPage = (): any => (
	<PageTemplate
		metaData={{
			title: 'Menu | Green Iguana Mexican Restaurant',
			description:
				'View our Green Iguana Mexican Restaurant Menu and Order Online Today!',
		}}
		className={styles.Menu}
	>
		<Section bgImg={menuImg} className={styles.Menu__hero} />
		<Section className="🔥pt-2 🔥pb-1">
			{hybridMenu.map((step, idx) => (
				<div key={idx} className={styles.Menu__step}>
					<h3 className="🔥justify-center">{step.title}</h3>
					{step.description && (
						<div className="🔥text-center">{step.description}</div>
					)}
					<div className={styles.Menu__options}>
						{step.options.map((opt: any, index: number) => (
							<MenuItem
								className={styles.Menu__options__option}
								key={index}
								title={opt.title}
								description={opt.description}
								price={opt.price}
							/>
						))}
					</div>
				</div>
			))}
			{/* <Tabs data={menu} /> */}
			{/* <h1 className={styles.Menu__title}>
				Menu<span>NEW!</span>
			</h1>
			<p className="🔥text-center 🔥py-2">
				Check out our new menu as we have updated to include all of our
				popular and well known specials!
			</p>
			{newMenuOptions.map((step, idx) => (
				<div key={idx} className={styles.Menu__step}>
					<h3>{step.title}</h3>
					{step.description && <p>{step.description}</p>}
					<div className={styles.Menu__options}>
						{step.options.map((opt, index) => (
							<MenuItem
								className={styles.Menu__options__option}
								key={index}
								title={opt.title}
								description={opt.description}
								price={opt.price}
							/>
						))}
					</div>
				</div>
			))} */}
		</Section>
	</PageTemplate>
);

export default MenuPage;
