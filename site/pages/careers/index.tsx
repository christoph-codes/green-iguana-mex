import type { NextPage } from 'next';
import PageTemplate from '../../templates/Page';
import Section from '../../components/Section';
import styles from './Careers.module.scss';

const Careers: NextPage = (): any => (
	<PageTemplate
		metaData={{
			title: 'Careers | Green Iguana Mexican Restaurant',
			description:
				'Green Iguana is looking to hire energetic Team Members to join our  #greeniguanafamily!',
			image: '/image-url',
		}}
		className={styles.Careers}
	>
		<Section title="Careers">
			<p>Careers Content will go here.</p>
		</Section>
	</PageTemplate>
);

export default Careers;
