//카드 선택 되면, playView 렌더링

export default class StartController {
  constructor({ startView, playView }) {
    this.startView = startView;
    this.selectView = this.startView.selectView;
    this.playView = playView;

    this.container = document.querySelector(".roletoChess-container");
    this.container.style.transition = "200ms opacity";

    this.selectView.on("start", () => {
      this.playViewRender();
    });
  }

  playViewRender() {
    // TODO: magic number 없애기
    this.container.style.opacity = 0;
    this.sleep(200).then(() => {
      this.playView.render();
      this.container.style.opacity = 1;
    });
  }

  sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
}
