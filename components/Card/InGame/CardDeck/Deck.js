import templates from "../../../../templates/index.js";
import SelectView from "../../../Card/SelectView.js";

export default class Deck extends SelectView {
  constructor(container) {
    super();

    this.container = container;
  }

  init(className) {
    this.deckClassName = className;
    const deckCont = templates.divContainer(className);
    this.container.innerHTML += deckCont;
  }
  
  initRender(cards, className) {
    this.render(cards);
    this.deck = document.querySelector(`.${this.deckClassName}`);
    this.attach(className);
  }

  attach(className) {
    if(!this.deck) this.deck = document.querySelector(`.${className}`);
    this.deck.innerHTML = this.template;
  }

  renderCards(cardsList) {
    this.render(cardsList);
    return this.template;
  }
}
