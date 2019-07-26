import templates from "../../../../templates/index.js";
import SelectView from "../../../Card/SelectView.js";

export default class Deck extends SelectView {
  constructor(cards, container) {
    super();

    this.cards = cards;
    this.container = container;
    this.render(this.cards);
  }

  init(className) {
    this.deckClassName = className;
    const deckCont = templates.divContainer(className);
    this.container.innerHTML += deckCont;
    this.deck = document.querySelector(`.${this.deckClassName}`);
    this.attach(className);
  }

  attach(className) {
    if(!this.deck) {this.deck = document.querySelector(`.${className}`);}
    this.deck.innerHTML = this.template;
  }

  renderCards(cardsList) {
    this.render(cardsList);
    //   this.attach();
    return this.template;
  }
}
