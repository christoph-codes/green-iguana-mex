import { FC } from 'react';
import { useForm } from '../../providers/FormContext';
import { EErrorMessages } from '../../util/inputValidations';
import styles from './Input.module.scss';

export type TInputProps = {
	type: string;
	name: string;
	placeholder?: string;
	label: string;
	required: boolean;
	validation: EErrorMessages[];
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
	return (
		<label className={`${styles.Input}`} htmlFor={name}>
			<>
				<span
					className={`${styles.Input__label} ${
						form[name as keyof typeof form]?.isNotValid.some(
							(e) => e !== ''
						)
							? styles['Input__label--error']
							: ''
					}`}
				>
					{label}
				</span>
				<input
					className={`${styles.Input__input} ${
						form[name as keyof typeof form]?.isNotValid.some(
							(e) => e !== ''
						)
							? styles['Input__input--error']
							: ''
					}`}
					name={name}
					placeholder={placeholder}
					type={type}
					id={name}
					value={form[name as keyof typeof form]?.value || ''}
					onChange={(e) => formUpdate(e, validation)}
					required={required}
				/>
				{form[name as keyof typeof form]?.isNotValid.length > 0 && (
					<ul className={styles.Input__errors}>
						{form[name as keyof typeof form]?.isNotValid.map(
							(err, index) =>
								err !== '' && (
									<li
										key={index}
										className={styles.Input__errors__error}
									>
										{err}
									</li>
								)
						)}
					</ul>
				)}
			</>
		</label>
	);
};

export default Input;
