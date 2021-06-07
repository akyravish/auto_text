const text = document.getElementById('text');
const input = document.getElementById('speed');
const showText = 'We all love Programming.';

let startingText = 1;
let speed = 500;

const autoText = () => {
	text.innerText = showText.slice(0, startingText);
	startingText++;

	if (startingText > showText.length) {
		startingText = 1;
	}
	setTimeout(() => {
		autoText();
	}, speed);
};

autoText();

input.addEventListener('input', (e) => {
	speed = 500 / e.target.value;
});
