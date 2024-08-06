export function createMenu() {
  const menuWrapper = document.createElement('div');
  const menuTitle = document.createElement('h1');
  const menuDifficultyInfo = document.createElement('span');
  const menuDifficultyBtnEasy = document.createElement('button');
  const menuDifficultyBtnMedium = document.createElement('button');
  const menuDifficultyBtnHard = document.createElement('button');

  menuWrapper.classList.add('game__menu', 'menu');
  menuTitle.classList.add('menu__title');
  menuDifficultyInfo.classList.add('menu__difficulty-info');
  menuDifficultyBtnEasy.classList.add('menu__btn');
  menuDifficultyBtnMedium.classList.add('menu__btn');
  menuDifficultyBtnHard.classList.add('menu__btn');

  menuTitle.textContent = 'Найди пару!';
  menuDifficultyInfo.textContent = 'Сложность:';
  menuDifficultyBtnEasy.textContent = 'EASY (16 карт)';
  menuDifficultyBtnMedium.textContent = 'MEDIUM (20 карт)';
  menuDifficultyBtnHard.textContent = 'HARD (24 карты)';

  menuWrapper.append(
    menuTitle,
    menuDifficultyInfo,
    menuDifficultyBtnEasy,
    menuDifficultyBtnMedium,
    menuDifficultyBtnHard,
  );

  return {
    menuWrapper,
    menuDifficultyBtnEasy,
    menuDifficultyBtnMedium,
    menuDifficultyBtnHard
  };
};
