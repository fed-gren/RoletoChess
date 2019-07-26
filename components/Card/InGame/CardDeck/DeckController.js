import Model from "../../../Model.js";
import constant from "../constants.js";

export default class DeckController {
  constructor({onHand, market}) {
    this.onHand = onHand;
    this.market = market;
    this.onHandContainer = document.querySelector(`.${constant.onHandContainer}`);
    this.marketContainer = document.querySelector(`.${constant.marketContainer}`);
    this.isPicked = false;
    this.deckEventHandler();
  }

  deckEventHandler() {
    this.marketHandler();
    this.onHandHandler();
  }

  marketHandler() {
    this.marketContainer.addEventListener("click", (event) => {
      console.log(event);
      this.buyCards(event.target);
      console.log(document.querySelector("body"));
    });
  }

  onHandHandler() {
    this.onHandContainer.addEventListener("click", ({target}) => {
      this.setChoiceCard(target);
    });
  }

  buyCards(target) {
    if(!target.classList.contains("class-card") || this.isPicked) return;
    const pickedUnit = this.getUnit(target.dataset.class);
    pickedUnit.idx = Model.onHand.length+1;
    console.log(pickedUnit);
    Model.onHand.push(...pickedUnit);
    const newTemplate = this.onHand.renderCards(Model.onHand);
    this.onHandContainer.innerHTML = newTemplate;
    this.removeCard(target);
    console.log(Model.onHand);
    this.isPicked = true;
  }

  setChoiceCard(target) {
    if(!target.classList.contains("class-card")) return;
    const pickedUnit = this.getUnit(target.dataset.class);
    Model.playerChoiceCard = pickedUnit;
    // Model.onHand
    const cards = target.parentElement.querySelectorAll(".class-card");
    console.log(cards);
  }

  getUnit(unitClass) {
    return Model.allCards.level1.filter( unit => unit.title === unitClass );
  }

  removeCard(card) {
    card.outerHTML = "";
  }

  onHandIdxReorder() {
    Model.onHand.forEach((cur, idx) => cur.idx = idx + 1);
  }
}