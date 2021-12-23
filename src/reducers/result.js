const resultReducer = (state = '', action) => {
	if (action.type === 'RESULTS') return action.payload;
	else return state;
};

export default resultReducer;
