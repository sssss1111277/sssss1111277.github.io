// Получаем элементы
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const statsEl = document.getElementById('stats');

document.getElementById('btnCount').addEventListener('click', ()=> {
  const txt = inputText.value;
  updateStatsAndResult(txt);
});
document.getElementById('btnClear').addEventListener('click', ()=> {
  inputText.value = '';
  outputText.value = '';
  updateStatsAndResult('');
});
document.getElementById('btnUpper').addEventListener('click', ()=> {
  const txt = inputText.value.toUpperCase();
  outputText.value = txt;
  updateStatsAndResult(txt);
});
document.getElementById('btnLower').addEventListener('click', ()=> {
  const txt = inputText.value.toLowerCase();
  outputText.value = txt;
  updateStatsAndResult(txt);
});
document.getElementById('btnTrim').addEventListener('click', ()=> {
  // удаляем лишние пробелы: заменяем несколько пробелов на один, удаляем пробелы в начале/конце
  const txt = inputText.value.replace(/\s+/g, ' ').trim();
  outputText.value = txt;
  updateStatsAndResult(txt);
});
document.getElementById('btnReverse').addEventListener('click', ()=> {
  const txt = inputText.value.split('').reverse().join('');
  outputText.value = txt;
  updateStatsAndResult(txt);
});
document.getElementById('btnCopy').addEventListener('click', async ()=> {
  try {
    await navigator.clipboard.writeText(outputText.value || inputText.value);
    alert('Скопировано в буфер обмена');
  } catch (e) {
    alert('Не удалось скопировать: ' + e);
  }
});

// Функция подсчёта статистики
function updateStatsAndResult(txt){
  const chars = txt.length;
  const lines = txt === '' ? 0 : txt.split(/\r\n|\r|\n/).length;
  // слово: последовательность не-пробельных символов
  const words = txt.trim() === '' ? 0 : txt.trim().split(/\s+/).length;
  statsEl.textContent = `Символов: ${chars} • Слов: ${words} • Строк: ${lines}`;
  // по умолчанию показываем обработанный текст в output (если пуст — покажем input)
  outputText.value = outputText.value || txt;
}
// === Переключение светлой / тёмной темы ===
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀️ Тема' : '🌙 Тема';
});
