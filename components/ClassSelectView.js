import Model from "./Model.js";
import templates from "../templates/index.js";

export default class ClassSelectView {
  constructor() {
    this.render();
  }

  render() {
    this.template = templates.startClassSelectView(Model.classes);
  }

  attachEvent() {
    this.classSelect = document.querySelector(".class-select");

    this.classSelect.addEventListener("click", ({ target }) => {
      if(Model.firstClass) return;

      if (target.classList.contains("class-card"))
        Model.firstClass = target.dataset.class;
    });
  }
}
