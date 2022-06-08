import { FC } from 'react';
// eslint-disable-next-line import/no-unresolved
import FormProvider from '../../providers/FormContext';
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
	const renderInputs = inputs.map((input, index) => (
		<Input key={index} {...input} />
	));
	return (
		<form className={`${styles.Form} ${className}`} onSubmit={onSubmit}>
			<FormProvider>{renderInputs}</FormProvider>
			<Button type="submit" {...submitButton} />
		</form>
	);
};

export default Form;
