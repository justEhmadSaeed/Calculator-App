import React from 'react';

const Button = ({ text, onClickHandler }) => {
	const operators = ['+', '-', '*', '/', '='];

	return (
		<div
			onClick={() => onClickHandler(text)}
			className={`btn  ${
				text === 'C'
					? 'clear'
					: operators.includes(text)
					? 'operators'
					: ''
			}
                `}
		>
			{text}
		</div>
	);
};
export default Button;
