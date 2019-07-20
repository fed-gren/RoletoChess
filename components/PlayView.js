export default class PlayView {
  constructor({ container, battleFieldView }) {
    this.container = container;
    this.battleFieldView = battleFieldView;
  }

  loadBattleFieldCss({ path }) {
    const head = document.getElementsByTagName("HEAD")[0];
    const link = document.createElement("link");

    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = path;
    head.appendChild(link);
  }

  render() {
    this.loadBattleFieldCss({
      path: "./components/BattleField/styles/battleField.css"
    });
    this.battleFieldView.render({ container: this.container });
  }
}
