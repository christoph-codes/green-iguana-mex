import type { NextPage } from 'next';
import PageTemplate from '../../templates/Page';
import Section from '../../components/Section';
import styles from './CateringPage.module.scss';

const CateringPage: NextPage = (): any => (
	<PageTemplate
		metaData={{
			title: 'Catering | Green Iguana Mexican Restaurant',
			description:
				'Green Iguana Mexican Restaurant catering is like no other, offering authentic home cooked mexican food right to the venue of your choice!',
			image: '/image-url',
		}}
		className={styles.container}
	>
		<Section title="Catering">
			<p>Catering Content will go here.</p>
		</Section>
	</PageTemplate>
);

export default CateringPage;
