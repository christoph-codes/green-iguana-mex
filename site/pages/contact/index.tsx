import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import PageTemplate from '../../templates/Page';
import Section from '../../components/Section';
import Card from '../../components/Card';
import Form from '../../components/Form';
import styles from './ContactPage.module.scss';

const ContactPage: NextPage = (): any => {
	const router = useRouter();
	const submitContact = (value: any) => {
		console.log(value);
		router.push('/contact/thank-you');
	};
	return (
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
				<Card shadow className={styles.Contact__form_card}>
					<p>
						Please fill out the fields below and you will hear from
						one of our team members soon!
					</p>
					<Form
						onSubmit={submitContact}
						formName="contact"
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
				</Card>
			</Section>
		</PageTemplate>
	);
};

export default ContactPage;
