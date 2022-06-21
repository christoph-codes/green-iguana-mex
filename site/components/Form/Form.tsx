import { FC, FormEvent } from 'react';
// eslint-disable-next-line import/no-unresolved
import FormProvider, { useForm } from '../../providers/FormContext';
import Button, { TButtonProps } from '../Button';
import Input, { TInputProps } from '../Input';
import styles from './Form.module.scss';

export type TFormProps = {
	inputs: TInputProps[];
	className?: string;
	onSubmit: () => void;
	submitButton: TButtonProps;
};

const Form: FC<TFormProps> = ({
	inputs,
	className = '',
	onSubmit,
	submitButton,
}) => {
	const { submission } = useForm();
	const renderInputs = inputs.map((input, index) => (
		<Input key={index} {...input} />
	));

	return (
		<FormProvider submit={onSubmit}>
			<form
				className={`${styles.Form} ${className}`}
				onSubmit={(e: FormEvent<HTMLFormElement>) =>
					submission(e, onSubmit)
				}
			>
				{renderInputs}
				<Button type="submit" {...submitButton} />
			</form>
		</FormProvider>
	);
};

export default Form;
