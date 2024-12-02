document.addEventListener('DOMContentLoaded', function() {
  const resultBtn = document.getElementById('result');
  const calculator = document.querySelector('.calculator'); 

  resultBtn.addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const operator = document.getElementById('operator').value;
    const num2 = parseFloat(document.getElementById('num2').value);
    let solution;

    if (isNaN(num1) || isNaN(num2)) {
      alert('Введите оба числа');
      return;
    }

    switch (operator) {
      case '-':
        solution = num1 - num2;
        break;
      case '+':
        solution = num1 + num2;
        break;
      case '*':
        solution = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          alert('Деление на 0 нельзя');
          return;
        }
        solution = num1 / num2;
        break;
      default:
        alert('Выберите оператор!');
        return;
    }

    document.getElementById('solution').value = solution;

    // Добавляем результат под калькулятором (вызываем функцию из history.js)
    addResultToHistory(solution, calculator); 
  });
});
