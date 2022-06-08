import type { NextPage } from 'next';
import PageTemplate from '../../templates/Page';
import Section from '../../components/Section';
import styles from './ContactPage.module.scss';
import Form from '../../components/Form';

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
		<Section
			title="Contact"
			description="Contact Green Iguana Mexican Restaurant today. We look forward to hearing from you!"
		>
			<Form
				submitButton={{
					children: 'Submit',
				}}
				inputs={[
					{
						type: 'text',
						name: 'fname',
						placeholder: 'John',
						label: 'First Name',
						required: true,
						validation: ['REQUIRED'],
					},
					{
						type: 'text',
						name: 'lname',
						placeholder: 'Doe',
						label: 'Last Name',
						required: true,
						validation: ['REQUIRED'],
					},
					{
						type: 'email',
						name: 'email',
						placeholder: 'john@doe.com',
						label: 'Email',
						required: true,
						validation: ['REQUIRED', 'EMAIL'],
					},
					{
						type: 'textarea',
						name: 'message',
						placeholder: 'Let us know how we are doing!',
						label: 'Message',
						required: true,
						validation: ['REQUIRED'],
					},
				]}
			/>
		</Section>
	</PageTemplate>
);

export default ContactPage;
