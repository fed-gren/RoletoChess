import StartView from "./components/StartView.js";

/**
 * app에서 start page를 렌더링하기 위해 필요한 초기화 작업을 한다.
 * StartController, StartView, ChampionModel
 */

const container = document.querySelector(".roletoChess-container");

new StartView(container);
