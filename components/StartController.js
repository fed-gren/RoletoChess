//카드 선택 되면, MapView 렌더링

export default class StartController {
  constructor({ startView, mapView }) {
    this.startView = startView;
    this.selectView = this.startView.selectView;
    this.mapView = mapView;

    this.container = document.querySelector(".roletoChess-container");
    this.container.style.transition = `200ms opacity`;

    this.selectView.on("start", () => {
      this.mapViewRender();
    });
  }

  mapViewRender() {
    // TODO: magic number 없애기
    this.container.style.opacity = 0;
    this.sleep(200).then(() => {
      this.mapView.render();
      this.container.style.opacity = 1;
    });

  }

  sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
}
