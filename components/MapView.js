import templates from "../templates/index.js";
import Model from "./Model.js";

export default class MapView {
  constructor(container) {
    this.container = container;
  }

  render() {
    this.template = templates.mapView();
    this.container.innerHTML = this.template;
  }
}
