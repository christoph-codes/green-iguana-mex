import type { NextPage } from 'next';
import PageTemplate from '../../templates/Page';
import Section from '../../components/Section';
import styles from './MenuPage.module.scss';
import Tabs from '../../components/Tabs';
import menu from '../../util/menu';

const MenuPage: NextPage = (): any => (
	<PageTemplate
		metaData={{
			title: 'Menu | Green Iguana Mexican Restaurant',
			description:
				'View our Green Iguana Mexican Restaurant Menu and Order Online Today!',
			image: '/image-url',
		}}
		className={styles.Menu}
	>
		<Section className="🔥pt-2 🔥pb-1" title="Menu">
			<Tabs data={menu} />
		</Section>
	</PageTemplate>
);

export default MenuPage;
