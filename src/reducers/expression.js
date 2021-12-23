const expressionReducer = (state = '', action) => {
	if (action.type === 'EXPRESSION') return action.payload;
	else return state;
};

export default expressionReducer;
