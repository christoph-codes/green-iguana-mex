import { createContext, FC, useContext, useState } from 'react';

export interface IFormProviderProps {
	children: any;
}
export type TFormContext = {
	form: {};
	// eslint-disable-next-line no-unused-vars
	formUpdate: (e: any) => void;
};
export const FormContext = createContext<TFormContext>({
	form: {},
	formUpdate: () => {},
});

const FormProvider: FC<IFormProviderProps> = ({ children }) => {
	const [form, setForm] = useState({});
	const formUpdate = (e: any) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value,
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
