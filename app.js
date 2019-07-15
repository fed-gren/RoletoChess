import StartView from "./components/StartPage/StartView.js";
import MapView from "./components/MapView.js";
import StartController from "./components/StartPage/StartController.js";
import Helper from "./components/Helper/index.js";

/**
 * app에서 start page를 렌더링하기 위해 필요한 초기화 작업을 한다.
 * StartController, StartView, ChampionModel
 */

const container = document.querySelector(".roletoChess-container");

window.addEventListener("DOMContentLoaded", () => {
  const startView = new StartView(container);
  const mapView = new MapView(container);
  new StartController({ startView, mapView });

  const helper = new Helper();
  helper.init();
});
