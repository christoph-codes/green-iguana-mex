import { ChangeEvent, FC } from 'react';
import { EErrorMessages } from '../../util/inputValidations';
import styles from './Input.module.scss';

export type TInputProps = {
	type: string;
	name: string;
	placeholder?: string;
	label: string;
	required: boolean;
	validation: EErrorMessages[];
	form: {
		[name: string]: {
			value: any;
			isNotValid: string[];
		};
	};
	onChange: (
		// eslint-disable-next-line no-unused-vars
		e: ChangeEvent<HTMLInputElement>,
		// eslint-disable-next-line no-unused-vars
		validation: EErrorMessages[]
	) => void;
};

const Input: FC<TInputProps> = ({
	type = 'text',
	name,
	placeholder,
	label,
	required = false,
	validation,
	form,
	onChange,
}) => (
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
				onChange={(e) => onChange(e, validation)}
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

export default Input;
