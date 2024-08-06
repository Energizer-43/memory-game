import AmazingCard from './AmazingCard.js';
import { createMenu } from './createMenu.js';

// Общий контейнер
const appContainer = document.getElementById('game');

// Добавление меню
const gameMenu = createMenu();
appContainer.append(gameMenu.menuWrapper);

// Клики по кнопкам
const btnEasy = gameMenu.menuDifficultyBtnEasy.addEventListener('click', function() {
  appContainer.innerHTML = '';
  appContainer.append(createTimer(60));

  const gameField = document.createElement('div');
  gameField.classList.add('game__field', 'game__field--easy');
  appContainer.append(gameField);
  newGame(gameField, 16);
});

const btnMedium = gameMenu.menuDifficultyBtnMedium.addEventListener('click', function() {
  appContainer.innerHTML = '';
  appContainer.append(createTimer(80));

  const gameField = document.createElement('div');
  gameField.classList.add('game__field', 'game__field--medium');
  appContainer.append(gameField);
  newGame(gameField, 20);
});

const btnHard = gameMenu.menuDifficultyBtnHard.addEventListener('click', function() {
  appContainer.innerHTML = '';
  appContainer.append(createTimer(100));

  const gameField = document.createElement('div');
  gameField.classList.add('game__field', 'game__field--hard');
  appContainer.append(gameField);
  newGame(gameField, 24);
});

// Функция рендер игры
function newGame(container, cardsCount) {
  let cardsNumberArray = [];
  let cardsArray = [];

  // Переменные первой и второй карты (по умолчанию пустые)
  let firstCard = null;
  let secondCard = null;

  for (let i = 0; i < cardsCount / 2; i++) {
    cardsNumberArray.push(i);
    cardsNumberArray.push(i);
  };

  // Перемешка массива
  cardsNumberArray = cardsNumberArray.sort(() => Math.random() - 0.5);

  for (const cardNumber of cardsNumberArray) {
    cardsArray.push(new AmazingCard(container, cardNumber, flip))
  };

    // Функция клика
  function flip(card) {
    // Условия
    if (firstCard !== null && secondCard !== null) {
      if (firstCard.number != secondCard.number) {
        firstCard.open = false;
        secondCard.open = false;
        firstCard = null;
        secondCard = null;
      }
    }

    if (firstCard == null) {
      firstCard = card;
    } else {
      if (secondCard == null) {
        secondCard = card;
      };
    };

    // Если обе карточки вскрыты - сравниваю значения src
    if (firstCard !== null && secondCard !== null) {
      if (firstCard.number == secondCard.number) {
        firstCard.success = true;
        secondCard.success = true;
        firstCard = null;
        secondCard = null;
      };
    };

    // Победа
    setTimeout(() => {
      if (document.querySelectorAll('.card--success').length === cardsNumberArray.length) {

        alert('ПОБЕДА!!!');
        clearInterval(interval);
        appContainer.innerHTML = '';
        appContainer.append(gameMenu.menuWrapper);
      };
    }, 1200);
  };
};

let interval;

function createTimer(time) {
  const timerElement = document.createElement('span');
  timerElement.classList.add('game__timer');

  interval = setInterval(function() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    timerElement.innerHTML = `${minutes}:${seconds}`;
    time--;

    if (time <= -1) {
      clearInterval(interval);
      alert('Время вышло!!!');
      appContainer.innerHTML = '';
      appContainer.append(gameMenu.menuWrapper);
    };
  }, 1000);

  return timerElement;
};

