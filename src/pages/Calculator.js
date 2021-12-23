import {
	expressionUpdate,
	historyUpdate,
	resultUpdate
} from 'actions';
import Button from 'Button';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Calculator = () => {
	const expression = useSelector((state) => state.expression);
	const results = useSelector((state) => state.results);
	const dispatch = useDispatch();

	const characters = [
		'1',
		'2',
		'3',
		'+',
		'4',
		'5',
		'6',
		'-',
		'7',
		'8',
		'9',
		'*',
		'C',
		'0',
		'=',
		'/'
	];
	const onClickHandler = (input) => {
		if (input === 'C') {
			dispatch(expressionUpdate(''));
			dispatch(resultUpdate(''));
		} else if (input === '=') {
			if (expression.length > 0)
				try {
					const expResult = eval(expression).toString();
					dispatch(resultUpdate(expResult));
					dispatch(
						historyUpdate({
							expression,
							results: expResult
						})
					);
				} catch (error) {
					alert(error);
				}
		} else dispatch(expressionUpdate(expression + input));
	};

	return (
		<div className="calculator-app">
			<Link to="/" className="link">
				Back
			</Link>
			<h1 className="heading">Calculator</h1>
			<div id="calculator-body">
				<div id="screen">
					<div id="input-screen">{expression}</div>
					<div id="output-screen">{results}</div>
				</div>
				{characters.map((char, i) => (
					<Button
						text={char}
						key={i}
						onClickHandler={onClickHandler}
					/>
				))}
			</div>
		</div>
	);
};

export default Calculator;
