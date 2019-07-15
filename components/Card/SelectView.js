import Model from "../Model.js";
import templates from "../../templates/index.js";
import MyEventEmitter from "../../utils/MyEventEmitter/index.js";

export default class SelectView extends MyEventEmitter {
  constructor({ CardViewList } = {}) {
    super();

    this.cardViewList = CardViewList.map(cardView => cardView.data);
    this.render();
  }

  render() {
    this.template = templates.cardSelectView(this.cardViewList);
  }

  attachEvent() {
    this.cardSelect = document.querySelector(".class-select");

    this.cardSelect.addEventListener("click", ({ target }) => {
      if (Model.firstClass) return;

      if (target.classList.contains("class-card")) {
        Model.firstClass = target.dataset.class;
        this.emit("start");
      }
    });
  }
}
