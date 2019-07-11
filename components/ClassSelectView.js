import Model from "./Model.js";
import templates from "../templates/index.js";

export default class ClassSelectView {
  constructor() {
    this.loadCardCss();
    this.loadCardSelectCss();
    this.render();
  }

  loadCardCss() {
    // Get HTML head element
    const head = document.getElementsByTagName("HEAD")[0];

    // Create new link Element
    const link = document.createElement("link");

    // set the attributes for link element
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "/components/styles/card.css";

    // Append link element to HTML head
    head.appendChild(link);
  }

  loadCardSelectCss() {
    // Get HTML head element
    const head = document.getElementsByTagName("HEAD")[0];

    // Create new link Element
    const link = document.createElement("link");

    // set the attributes for link element
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "/components/styles/cardSelect.css";

    // Append link element to HTML head
    head.appendChild(link);
  }

  render() {
    this.template = templates.startClassSelectView(Model.classes);
  }
}
