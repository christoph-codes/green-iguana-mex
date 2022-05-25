import type { NextPage } from 'next';
import PageTemplate from '../../templates/Page';
import Section from '../../components/Section';
import styles from './LocationsPage.module.scss';

const LocationsPage: NextPage = (): any => (
	<PageTemplate
		metaData={{
			title: 'Locations | Green Iguana Mexican Restaurant',
			description:
				'Find a Green Iguana Mexican Restaurant Location Near You!',
			image: '/image-url',
		}}
		className={styles.container}
	>
		<Section title="Locations">
			<p>Locations Content will go here.</p>
		</Section>
	</PageTemplate>
);

export default LocationsPage;
