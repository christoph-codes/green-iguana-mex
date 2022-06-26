import emailjs from '@emailjs/browser';

export const emailSubmit = (formData: {}): any => {

	// TODO: Add formType for the formData for subject of email being sent.
		emailjs
		.send(
			process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
			process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
			formData,
			process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
		)
		.then(
			(response) => ({ message: 'SUCCESS!', data: response }),
			
	).catch(err => ({ message: 'FAILED...', data: err }));
};

export default emailSubmit;
