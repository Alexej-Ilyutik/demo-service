const BTN_RESULT = document.querySelector('.input__result');
const BTN_CLEAR = document.querySelector('.clear');
const BTN_REFRESH = document.querySelector('.refresh');
const MAIN_RESULT = document.querySelector('.result');
const RESULT = document.querySelector('.result__area');
const TEXTAREA = document.querySelector('.input__textarea');
const INPUT_ALL = document.querySelectorAll('.checkbox__input');
const RADIO_ALL = document.querySelectorAll('.radio__input');
const SELECT = document.querySelector('.option__select');
const AREA_TEXT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

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

  localStorage.setItem('TEXTAREA', TEXTAREA.value);
  localStorage.setItem('SELECT', SELECT.value);
}

function checkInput(input) {
  let str = '';
  input.forEach((el) => {
    if (el.checked) {
      str = str.concat(`${el.dataset.value}, `);
      localStorage.setItem(`${el.id}`, (el.checked = true));
    } else {
      localStorage.setItem(`${el.id}`, (el.checked = false));
    }
  });
  if (!str) {
    str = 'Not selected!..';
  }
  return str.slice(0, -2);
}

function clearArea() {
  TEXTAREA.value = '';
}

function refreshArea() {
  TEXTAREA.value = `"${AREA_TEXT}"`;
}

BTN_RESULT.onclick = showResult;
BTN_CLEAR.onclick = clearArea;
BTN_REFRESH.onclick = refreshArea;

let storageArea = localStorage.getItem('TEXTAREA');
let storageSelect = localStorage.getItem('SELECT');
const inputs = document.querySelectorAll('input');

window.onload = function () {
  if (storageArea) {
    TEXTAREA.value = `${storageArea}`;
  } else {
    refreshArea();
  }
  if (storageSelect) {
    SELECT.value = `${storageSelect}`;
  }

  inputs.forEach((el) => {
    if (localStorage.getItem(`${el.id}`) === 'true') {
      el.checked = true;
    }
  });

};
