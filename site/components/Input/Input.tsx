import { FC, useState } from 'react';
import { useForm } from '../../providers/FormContext';
import inputValidations from '../../util/inputValidations';
import styles from './Input.module.scss';

export type TInputProps = {
	type: string;
	name: string;
	placeholder?: string;
	label: string;
	required: boolean;
	validation: string[];
};

const Input: FC<TInputProps> = ({
	type = 'text',
	name,
	placeholder,
	label,
	required = false,
	validation,
}) => {
	const { form, formUpdate } = useForm();
	const [errors, setErrors] = useState({});
	const validate = () => {
		const inputName = form[name as keyof typeof form];
		console.log('iName:', form[name as keyof typeof form]);
		validation.forEach((iv) => {
			if (inputValidations[iv as keyof typeof inputValidations]) {
				// isValid returns `true` or `string of error message`
				const isValid =
					inputValidations[iv as keyof typeof inputValidations](
						inputName
					);
				if (typeof isValid !== 'string') {
					delete errors[inputName as keyof typeof errors];
				} else {
					setErrors({
						...errors,
						[form[name as keyof typeof form]]: isValid,
					});
				}
			} else {
				console.error('This does not exist as an input validator.');
			}
		});
	};
	return (
		<label htmlFor={name}>
			<span className={styles.Input__label}>{label}</span>
			<input
				className={`${styles.Input__input}`}
				name={name}
				placeholder={placeholder}
				type={type}
				id={name}
				value={form[name as keyof typeof form]}
				onChange={formUpdate}
				required={required}
				onBlur={() => validate()}
			/>
			{errors &&
				Object.keys(errors).map((err, index) => (
					<p key={index}>{err}</p>
				))}
		</label>
	);
};

export default Input;
