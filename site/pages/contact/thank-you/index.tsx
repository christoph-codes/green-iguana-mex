import type { NextPage } from 'next';
import Image from 'next/image';
import PageTemplate from '../../../templates/Page';
import Section from '../../../components/Section';
import Card from '../../../components/Card';
import thankyouImage from '../../../assets/images/gim-form-thankyou.jpg';
import styles from './ContactThankYouPage.module.scss';

const ContactThankYouPage: NextPage = (): any => (
	<PageTemplate
		metaData={{
			title: 'Thank you for contacting Green Iguana Mexican Restaurant',
			description:
				'Thank you for contacting Green Iguana Mexican Restaurant. Be sure to Order Online Today!',
			image: thankyouImage,
		}}
		className={styles.Contact}
	>
		<Section
			title="Thank you"
			description="Thank you for contacting us. A member from our team will be reaching out to you soon!"
		>
			<Card shadow className={styles.Contact__form_card}>
				<Image src={thankyouImage} alt="Thank you on a table" />
			</Card>
		</Section>
	</PageTemplate>
);

export default ContactThankYouPage;
