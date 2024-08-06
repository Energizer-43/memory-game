import Card from './Card.js';

export default class AmazingCard extends Card {
  set number(value) {
    const cardsImgArray = [
      'img/1.png',
      'img/2.png',
      'img/3.png',
      'img/4.png',
      'img/5.png',
      'img/6.png',
      'img/7.png',
      'img/8.png',
      'img/9.png',
      'img/10.png',
      'img/11.png',
      'img/12.png',
    ];

    const cardImage = document.createElement('img');
    cardImage.src = cardsImgArray[value];
    this._number = value;
    // super.createElement();
    this.card.cardBack.append(cardImage);
  };

  get number() {
    return this._number;
  };
};
