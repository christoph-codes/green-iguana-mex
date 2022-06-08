// All functions must either return true or the error message in which failed.
const inputValidations = {
	REQUIRED(value: any) {
		if (value === '') {
			return 'This field is required';
		} 
		return true;
	},
};

export default inputValidations;
