import template from "../../templates/index.js";

export default class BattleBoardView {
  constructor() {}

  loadCss({ path }) {
    const head = document.getElementsByTagName("HEAD")[0];
    const link = document.createElement("link");

    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = path;
    head.appendChild(link);
  }

  render({ container }) {
    this.loadCss({
      path: "./components/BattleBoard/styles/battleBoard.css"
    });
    container.innerHTML = template.battleBoardView();
  }
}
