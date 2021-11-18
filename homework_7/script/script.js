const firstNumber = prompt('Введите первое число');
let operator;
let secondNumber;
let checkWarning = false;

if (firstNumber == '' || firstNumber == null) {
	checkWarning = true;
	alert('Первое число не указано');
} else if (isNaN(Number(firstNumber))) {
	checkWarning = true;
	alert('Неккоректный ввод чисел');
}

if (!checkWarning) {
	operator =  prompt('Введите математический оператор');
	if (operator == '' || operator == null) {
		checkWarning = true;
		alert('Не введён знак');
	} else if (operator != '+' 
		    && operator != '-' 
		    && operator != '/'
		    && operator != '*') {
		checkWarning = true;
		alert('Программа не поддерживает такую операцию');
	}
}

if (!checkWarning) {
	secondNumber = prompt('Введите второе число');
	if (secondNumber == '' || secondNumber == null) {
		checkWarning = true;
		alert('Второе число не указано');
	} else if (isNaN(Number(secondNumber))) {
		checkWarning = true;
		alert('Неккоректный ввод чисел');
	}
}
	
if (!checkWarning) {
	switch(operator) {
		case '+': alert(Number(firstNumber) + Number(secondNumber)); break;
		case '-': alert(Number(firstNumber) - Number(secondNumber)); break;
		case '/': alert(Number(firstNumber) / Number(secondNumber)); break;
		case '*': alert(Number(firstNumber) * Number(secondNumber)); break;
	} 
}
