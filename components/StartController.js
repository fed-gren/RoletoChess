//카드 선택 되면, MapView 렌더링

export default class StartController {
  constructor({ startView, mapView }) {
    this.startView = startView;
    this.classSelectView = this.startView.classSelectView;
    this.mapView = mapView;

    this.classSelectView.on("start", () => {
      this.mapView.render();
    });
  }
}
