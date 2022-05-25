import type { NextPage } from 'next';
import PageTemplate from '../../templates/Page';
import Section from '../../components/Section';
import styles from './ContactPage.module.scss';

const ContactPage: NextPage = (): any => (
	<PageTemplate
		metaData={{
			title: 'Contact | Green Iguana Mexican Restaurant',
			description:
				'Contact Green Iguana Mexican Restaurant and Order Online Today!',
			image: '/image-url',
		}}
		className={styles.Contact}
	>
		<Section title="Contact">
			<p>Contact Content will go here.</p>
		</Section>
	</PageTemplate>
);

export default ContactPage;
