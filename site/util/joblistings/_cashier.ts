import { IJobListing } from ".";

const cashier: IJobListing = {
	slug: 'cashier',
	title: 'Cashier',
	shortDescription:
		'Green Iguana is seeking friendly and energetic Cashiers to join our team.',
	longDescription: [
		'As the face of our restaurant, you will be responsible for providing exceptional customer service and handling cash transactions accurately and efficiently.',
		'Responsibilities include greeting customers, taking orders, processing payments, handling customer inquiries and complaints, maintaining a clean and organized work area, and following food safety and sanitation guidelines.',
		'The ideal candidate will possess excellent communication skills, a friendly and outgoing personality, the ability to multitask in a fast-paced environment, and a commitment to providing exceptional customer service.',
	],
	qualifications: [
		'Excellent communication skills',
        'Ability to handle cash transactions accurately',
        'Customer service-oriented with a friendly and outgoing personality',
        'Ability to multitask in a fast-paced environment',
        'Basic math and computer skills',
        'Food safety and sanitation knowledge',
	],
	location: 'St. George, UT',
	pay: '$10 hourly plus Tips (Average hourly earning $15 & up)',
};

export default cashier;
