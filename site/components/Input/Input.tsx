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
		<label htmlFor={name}>
			<>
				<span className={styles.Input__label}>{label}</span>
				<input
					className={`${styles.Input__input}`}
					name={name}
					placeholder={placeholder}
					type={type}
					id={name}
					value={form[name as keyof typeof form]?.value || ''}
					onChange={(e) => formUpdate(e, validation)}
					required={required}
				/>
				{form[name as keyof typeof form]?.isNotValid.length > 0 &&
					form[name as keyof typeof form]?.isNotValid.map(
						(err) => err !== '' && <p>{err}</p>
					)}
			</>
		</label>
	);
};

export default Input;
