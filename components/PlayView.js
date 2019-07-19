export default class PlayView {
  constructor({ container, battleBoardView }) {
    this.container = container;
    this.battleBoardView = battleBoardView;
  }

  render() {
    this.battleBoardView.render({ container: this.container });
  }
}
