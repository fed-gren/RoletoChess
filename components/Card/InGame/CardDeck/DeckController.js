import Model from "../../../Model.js";

export default class DeckController {
  constructor({onHand, market}) {
    this.onHand = onHand;
    this.market = market;
    this.test = document.querySelector(".deck-onHand");
    this.deckEventHandler();
    this.isPicked = false;
  }

  deckEventHandler() {
    this.marketHandler();
  }

  marketHandler() {
    this.market.deck.addEventListener("click", ({target}) => {      
      this.buyCards(target);
      console.log(document.querySelector("body"));
    });
  }

  buyCards(target) {
    if(!target.classList.contains("class-card") || this.isPicked) return;
    const pickedUnit = this.getUnit(target.dataset.class);
    Model.onHand.push(...pickedUnit);
    this.onHand.renderCards(Model.onHand);
    this.isPicked = true;
  }

  getUnit(unitClass) {
    return Model.allCards.level1.filter( unit => unit.title === unitClass );
  }
}