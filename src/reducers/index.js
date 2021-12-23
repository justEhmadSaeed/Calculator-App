import { combineReducers } from 'redux';
import expressionReducer from 'reducers/expression';
import resultReducer from 'reducers/result';
import historyReducer from './history';

const allReducers = combineReducers({
	expression: expressionReducer,
	results: resultReducer,
	history: historyReducer
});

export default allReducers;
