import type { NextPage } from 'next';
import PageTemplate from '../../templates/Page';
import Section from '../../components/Section';
import styles from './MenuPage.module.scss';

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
		<Section title="Menu">
			<p>Menu Content will go here.</p>
		</Section>
	</PageTemplate>
);

export default MenuPage;
