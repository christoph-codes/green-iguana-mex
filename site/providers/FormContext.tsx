/* eslint-disable no-unused-vars */
import {
	ChangeEvent,
	createContext,
	FC,
	FormEvent,
	useContext,
	useState,
} from 'react';
import inputValidations, { EErrorMessages } from '../util/inputValidations';
import Form from '../components/Form';

export interface IFormProviderProps {
	children: any;
	onSubmit: (_: any) => void;
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
	submission: (submitFunc: Function) => void;
};

export const FormContext = createContext<TFormContext>({
	form: {},
	formUpdate: () => {},
	submission: () => {},
});

const FormProvider: FC<IFormProviderProps> = ({ children, onSubmit }) => {
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
	const submission = () => {
		console.log('submission', form);
		onSubmit(form);
	};
	return (
		<FormContext.Provider value={{ form, formUpdate, submission }}>
			<Form onSubmit={submission}>{children}</Form>
		</FormContext.Provider>
	);
};

export const useForm = () => useContext(FormContext);

export default FormProvider;
