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
	const { form, formUpdate, errors, errorUpdate } = useForm();
	const validate = (inputValue: any) => {
		console.log('inputValue:', inputValue);
		validation.forEach((iv) => {
			if (inputValidations[iv as keyof typeof inputValidations]) {
				// isValid returns `true` or `string of error message`
				// checks validation
				const isValid =
					inputValidations[iv as keyof typeof inputValidations](
						inputValue
					);
				console.log('isValid:', isValid);
				errorUpdate(name, isValid);
			} else {
				console.error('Not a valid input validator.');
			}
		});
	};
	console.log('errors', errors);
	return (
		<label htmlFor={name}>
			<>
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
					onBlur={() => validate(form[name as keyof typeof form])}
				/>
				{errors.length &&
					errors.map(
						(err) =>
							err.key === name && (
								<p key={err.key}>{err.messages.join(', ')}</p>
							)
					)}
			</>
		</label>
	);
};

export default Input;
