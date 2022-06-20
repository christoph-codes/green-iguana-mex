/* eslint-disable no-unused-vars */
import { ChangeEvent, createContext, FC, useContext, useState } from 'react';
import inputValidations, { EErrorMessages } from '../util/inputValidations';

export interface IFormProviderProps {
	children: any;
}

export type TFormContext = {
	form: {
		[name: string]: {
			value: any;
			isNotValid: string[];
		};
	};
	formUpdate: (
		e: ChangeEvent<HTMLInputElement>,
		validation: EErrorMessages[]
	) => void;
};

export const FormContext = createContext<TFormContext>({
	form: {},
	formUpdate: () => {},
});

const FormProvider: FC<IFormProviderProps> = ({ children }) => {
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
					console.log('isValid', isValid);
					return isValid;
				}
				throw new Error('Not a valid input validator.');
			});
		console.log('validate FUN:', validate());
		setForm({
			...form,
			[name]: {
				value,
				isNotValid: [...validate()],
			},
		});
	};
	return (
		<FormContext.Provider value={{ form, formUpdate }}>
			{children}
		</FormContext.Provider>
	);
};

export const useForm = () => useContext(FormContext);

export default FormProvider;
