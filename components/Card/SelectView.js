import Model from "../Model.js";
import templates from "../../templates/index.js";
import MyEventEmitter from "../../utils/MyEventEmitter/index.js";

export default class SelectView extends MyEventEmitter {
  constructor({ cardList }) {
    super();

    this.cardList = cardList;
    this.render();
  }

  render() {
    this.template = templates.cardSelectView(this.cardList);
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
