import template from "../../templates/index.js";
import Model from "../Model.js";
import templates from "../../templates/index.js";

export default class BattleFieldView {
  constructor() {
    this.eventAttachFlag = false;
  }

  attachEvent() {
    this.eventAttachFlag = true;
    const roletoChessContainer = document.querySelector(".roletoChess-container");
    roletoChessContainer.addEventListener(
      "click",
      ({ target, target: { classList } }) => {
        if (
          !(
            classList.contains("player-block")
            || classList.contains("player-card")
          )
        )
          return;
        if (classList.contains("player-card"))
          this.removePlayerCard({ target: target.parentElement });
        else this.setPlayerCard({ target });
      }
    );
  }

  render({ container }) {
    this.template = template.battleFieldView({
      playerFieldCards: Model.playerFieldCards,
      enemyFieldCards: Model.enemyFieldCards
    });
    container.innerHTML = this.template;

    if (!this.eventAttachFlag) this.attachEvent();
  }

  setPlayerCard({ target }) {
    //Model에 있는 selectedCard에 있는 데이터 옮기기.
    const card = Model.playerChoiceCard;
    if (card === null) return;
    target.innerHTML = templates.battleFieldCardView({ cardData: card });
  }

  removePlayerCard({ target }) {
    //position 번호에 있는 카드 제거
    //해당 position에 카드 없으면 아무 행동 안함.
    target.innerHTML = "";
  }
}
