import type { NextPage } from 'next';
import PageTemplate from '../../templates/Page';
import Section from '../../components/Section';
import styles from './MenuPage.module.scss';
import Tabs from '../../components/Tabs';
import menu from '../../util/menu';
import menuImg from '../../assets/images/gim-menu2.jpg';

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
		<Section className="🔥pt-2 🔥pb-1" title="Menu">
			<Tabs data={menu} />
		</Section>
	</PageTemplate>
);

export default MenuPage;
