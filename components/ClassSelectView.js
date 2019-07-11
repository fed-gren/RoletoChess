import Model from "./Model.js";
import templates from "../templates/index.js";

export default class ClassSelectView {
  constructor() {
    this.render();
  }

  render() {
    this.template = templates.startClassSelectView(
      Model.classes
    );
  }
}
