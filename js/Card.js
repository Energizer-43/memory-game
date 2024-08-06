export default class Card {
  _open = false
  _success = false

  constructor(container, number, flip) {
    this.card = this.createElement();
    this.number = number;
    this.flip = flip;

    container.append(this.card.card);
  };

  set open(value) {
    this._open = value;
    value ? this.card.card.classList.add('card--open') : this.card.card.classList.remove('card--open');
  };

  get open() {
    return this._open;
  };

  set success(value) {
    this._success = value;

    if (value) {
      setTimeout(() => {
        this.card.card.classList.add('card--success')
      }, 1000);
    } else {
      this.card.card.classList.remove('card--success');
    };
  };

  get success() {
    return this._success;
  };

  createElement() {
    const card = document.createElement('div');
    const cardFront = document.createElement('div');
    const cardBack = document.createElement('div');

    card.classList.add('game__card', 'card');
    cardFront.classList.add('card__front');
    cardBack.classList.add('card__back');

    cardFront.textContent = '?';

    card.addEventListener('click', () => {
      if (this.open == false && this.success == false) {
        this.open = true;
        this.flip(this);
      };
    });

    card.append(cardFront, cardBack);

    return {
      cardBack,
      card
    };
  };
};
