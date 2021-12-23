import Button from 'Button';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Calculator = () => {
	const [expression, setExpression] = useState('');
	const [results, setResults] = useState('');

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
			setExpression('');
			setResults('');
		} else if (input === '=') {
			try {
				setResults(eval(expression));
			} catch (error) {
				alert(error);
			}
		} else setExpression(expression + input);
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