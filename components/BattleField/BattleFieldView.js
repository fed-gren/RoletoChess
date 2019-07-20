import template from "../../templates/index.js";
import Model from "../Model.js";

export default class BattleFieldView {
  constructor() {}

  render({ container }) {
    container.innerHTML = template.battleFieldView({
      playerFieldCards: Model.playerFieldCards,
      enemyFieldCards: Model.enemyFieldCards
    });
  }

  setPlayerCard({ card, position }) {
    //Model에 있는 selectedCard에 있는 데이터 옮기기.
    //그 다음 렌더링
  }

  removePlayerCard({ position }) {
    //position 번호에 있는 카드 제거
    //해당 position에 카드 없으면 아무 행동 안함.
    //렌더링
  }
}
