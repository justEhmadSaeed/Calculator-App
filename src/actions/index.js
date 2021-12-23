export const expressionUpdate = (payload) => {
	return {
		type: 'EXPRESSION',
		payload
	};
};

export const resultUpdate = (payload) => {
	return {
		type: 'RESULTS',
		payload
	};
};

export const historyUpdate = (payload) => {
	return {
		type: 'ADD_HISTORY',
		payload
	};
};
