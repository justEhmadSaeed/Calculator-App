const historyReducer = (state = [], action) => {
	if (action.type === 'ADD_HISTORY') {
		state.push(action.payload);
		return state;
	} else return state;
};

export default historyReducer;
