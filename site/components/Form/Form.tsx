import { FC, useState, ChangeEvent } from 'react';
import inputValidations, { EErrorMessages } from '../../util/inputValidations';
import { emailSubmit } from '../../util/helpers';
// eslint-disable-next-line import/no-unresolved
import Button, { TButtonProps } from '../Button';
import Input, { TInputProps } from '../Input';
import Loader from '../Loader';
import styles from './Form.module.scss';

export type TFormProps = {
	inputs: TInputProps[];
	className?: string;
	// eslint-disable-next-line no-unused-vars
	onSubmit: (e: {}) => void;
	submitButton: TButtonProps;
	formName: string;
};

const Form: FC<TFormProps> = ({
	inputs,
	className = '',
	onSubmit,
	submitButton,
	formName,
}) => {
	const [form, setForm] = useState({});
	const formUpdate = (
		e: ChangeEvent<HTMLInputElement>,
		validation: EErrorMessages[]
	) => {
		const { name, value } = e.target;
		const validate = () =>
			validation.map((iv: EErrorMessages) => {
				if (
					inputValidations[
						iv as unknown as keyof typeof EErrorMessages
					]
				) {
					// isValid returns `true` or `string of error message`
					// checks validation
					const isValid =
						inputValidations[
							iv as unknown as keyof typeof EErrorMessages
						](value);
					return isValid;
				}
				throw new Error('Not a valid input validator.');
			});
		setForm({
			...form,
			[name]: {
				value,
				isNotValid: [...validate()],
			},
		});
	};
	const renderInputs = inputs.map((input, index) => (
		<Input key={index} form={form} onChange={formUpdate} {...input} />
	));
	const [submitting, setSubmitting] = useState(false);
	const submit = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSubmitting(true);

		const emailSubmission: { message: string; data: {} } = emailSubmit({
			...form,
			formType: formName,
		});

		setTimeout(() => {
			setSubmitting(false);
		}, 2000);
		return onSubmit(emailSubmission);
	};

	return (
		<form
			className={`${styles.Form} ${className}`}
			onSubmit={(e: ChangeEvent<HTMLFormElement>) => submit(e)}
		>
			{renderInputs}
			<Button type="submit" {...submitButton}>
				{submitting ? (
					<>
						<Loader className="🔥mr-1" /> Loading{' '}
					</>
				) : (
					submitButton.children
				)}
			</Button>
		</form>
	);
};

export default Form;
