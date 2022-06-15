import { createContext, FC, useContext, useState } from 'react';
import { EErrorMessages } from '../util/inputValidations';

export interface IFormProviderProps {
	children: any;
}
export type TError = {
	key: string;
	messages: string[];
};
export type TFormContext = {
	form: {};
	// eslint-disable-next-line no-unused-vars
	formUpdate: (e: any) => void;
	errors: TError[];
	// eslint-disable-next-line no-unused-vars
	errorUpdate: (name: string, inputVal: EErrorMessages, value: any) => void;
};
export const FormContext = createContext<TFormContext>({
	form: {},
	formUpdate: () => {},
	errors: [],
	errorUpdate: () => {},
});

const FormProvider: FC<IFormProviderProps> = ({ children }) => {
	const [form, setForm] = useState({});
	const [errors, setErrors] = useState<TError[]>([]);
	const formUpdate = (e: any) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value,
		});
	};
	const errorUpdate = (
		name: string,
		inputVal: EErrorMessages,
		validity: string | true
	) => {
		if (typeof validity !== 'string') {
			// if the validity returns true
			let msgExists = false;
			// Find error message that needs to be removed.
			const cleanErrors: (TError | string[])[] = errors.map((err) => {
				if (
					err.messages.includes(
						EErrorMessages[
							inputVal as unknown as keyof typeof EErrorMessages
						]
					)
				) {
					msgExists = true;
					const existingMsg = err.messages.indexOf(
						EErrorMessages[
							inputVal as unknown as keyof typeof EErrorMessages
						]
					);
					if (existingMsg !== -1) {
						return err.messages.splice(existingMsg, 1);
					}
					return err;
				}
				return err;
			});

			if (msgExists) {
				setErrors(cleanErrors);
			}
			setErrors(errors.filter((err) => err.key !== name));
		} else {
			let exists = false;
			const newErrors = errors.map((err) => {
				if (exists) return err;

				if (err.key === name) {
					exists = true;
					if (!err.messages.includes(validity)) {
						err.messages.push(validity);
					}
				}
				return err;
			});

			if (!exists) newErrors.push({ key: name, messages: [validity] });
			setErrors(newErrors);
		}
	};
	return (
		<FormContext.Provider value={{ form, formUpdate, errors, errorUpdate }}>
			{children}
		</FormContext.Provider>
	);
};

export const useForm = () => useContext(FormContext);

export default FormProvider;
