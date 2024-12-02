// Функция для добавления результата под калькулятором 
function addResultToHistory(result, calculator) { 
  const resultDiv = document.createElement('div');
  resultDiv.textContent = result;
  resultDiv.classList.add('history-item');

  resultDiv.addEventListener('click', function() {
    calculator.removeChild(resultDiv);
  });

  calculator.appendChild(resultDiv); 
}
