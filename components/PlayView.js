import templates from "../templates/index.js";
import Model from "./Model.js";

export default class PlayView {
  constructor(container) {
    this.container = container;
  }

  render() {
    this.template = templates.playView(Model);
    this.container.innerHTML = this.template;
  }
}
