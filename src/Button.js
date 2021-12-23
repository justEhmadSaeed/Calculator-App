import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, onClickHandler }) => {
	const operators = ['+', '-', '*', '/', '='];

	return (
		<button
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
		</button>
	);
};
Button.propTypes = {
	text: PropTypes.string,
	onClickHandler: PropTypes.func.isRequired
};
Button.defaultProps = {
	text: ''
};
export default Button;
