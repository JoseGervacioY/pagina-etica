// Quiz interactivo
function checkAnswer() {
  const select = document.getElementById('quizSelect');
  const result = document.getElementById('quizResult');

  if (select.value === '') {
    result.textContent = 'Selecciona una opción';
    result.style.color = '#cc0000';
    return;
  }

  if (select.value === 'correcto') {
    result.textContent = '¡Correcto! Los sesgos son un riesgo ético real.';
    result.style.color = '#008800';
  } else {
    result.textContent = 'Incorrecto. Intenta de nuevo.';
    result.style.color = '#cc0000';
  }
}
