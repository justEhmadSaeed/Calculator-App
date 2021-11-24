const inputScreen = document.getElementById('input-screen');
const outputScreen = document.getElementById('output-screen');

function onClick(input) {
	if (input === 'C') {
		inputScreen.innerText = '';
		outputScreen.innerText = '';
	} else if (input === '=') {
		outputScreen.innerText = eval(inputScreen.innerText);
	} else inputScreen.innerText += input;
}
