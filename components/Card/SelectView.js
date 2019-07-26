import Model from "../Model.js";
import templates from "../../templates/index.js";
import MyEventEmitter from "../../utils/MyEventEmitter/index.js";

export default class SelectView extends MyEventEmitter {
  constructor( cardList = [] ) {
    super();
    this.cards = cardList;
    this.render(this.cards);
  }

  render(cardList) {
    this.template = templates.cardSelectView(cardList);
  }

  attachEvent() {
    this.cardSelect = document.querySelector(".class-select");

    this.cardSelect.addEventListener("click", ({ target }) => {
      if (Model.onHand) return;

      if (target.classList.contains("class-card")) {
        Model.onHand = Model.startCards.filter(obj => {
          return obj.title === target.dataset.class;
        });
        this.emit("start");
      }
    });
  }
}
