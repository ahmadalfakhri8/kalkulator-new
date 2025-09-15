document.addEventListener('DOMContentLoaded', function() {
	const inputs = document.querySelectorAll('input[type="number"]');
	const buttons = document.querySelectorAll('.tombol button');
	const hasilEl = document.querySelector('.hasil');
    const resetDiv = document.querySelector('.reset');

	function getValues() {
		const val1 = parseFloat(inputs[0].value);
		const val2 = parseFloat(inputs[1].value);
		return [val1, val2];
	}

	function setResult(value) {
		hasilEl.textContent = isNaN(value) ? 'Error' : value;
	}

	buttons[0].addEventListener('click', function() { // +
		const [a, b] = getValues();
		setResult(a + b);
	});
	buttons[1].addEventListener('click', function() { // -
		const [a, b] = getValues();
		setResult(a - b);
	});
	buttons[2].addEventListener('click', function() { // x
		const [a, b] = getValues();
		setResult(a * b);
	});
	buttons[3].addEventListener('click', function() { // /
		const [a, b] = getValues();
		setResult(b === 0 ? 'Tidak bisa dibagi 0' : a / b);
	});
    resetDiv.addEventListener('click', function() {
        document.querySelectorAll('input[type="number"]').forEach(input => input.value = '');
        document.querySelector('.hasil').textContent = '';
    });
});
