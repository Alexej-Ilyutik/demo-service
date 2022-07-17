const BTN_RESULT = document.querySelector('.input__result');
const BTN_CLEAR = document.querySelector('.input__result');
const BTN_REFRESH = document.querySelector('.input__result');
const MAIN_RESULT = document.querySelector('.result');
const RESULT = document.querySelector('.result__area');
const TEXTAREA = document.querySelector('.input__textarea');
const INPUT_ALL = document.querySelectorAll('.checkbox__input');
const RADIO_ALL = document.querySelectorAll('.radio__input');
const SELECT = document.querySelector('.option__select');


function showResult() {
  let checkboxStr = checkInput(INPUT_ALL);
  let radioStr = checkInput(RADIO_ALL);
  MAIN_RESULT.style.display = 'flex';
  RESULT.innerHTML = '';

  RESULT.innerHTML = `<b>The user entered the following text:</b><br>
  ${TEXTAREA.value}<br><br>
  <b>The user has selected the following settings:</b><br>
  Checkboxes: ${checkboxStr};<br>
  Radio buttons: ${radioStr};<br>
  Option: ${SELECT.value};
  `;

}

function checkInput(input) {
  let str = '';
  input.forEach((el) => {
    if (el.checked) {
      str = str.concat(`${el.dataset.value}, `);
    }
  });
  if(!str){
    str = 'Not selected!..';
  }
  return str.slice(0, -2);
}



BTN_RESULT.onclick = showResult;
