//카드 선택 되면, playView 렌더링


// import Model from "../Model.js";
import Deck from "../Card/InGame/CardDeck/Deck.js";
import constant from "../Card/InGame/constants.js";
import DeckController from "../Card/InGame/CardDeck/DeckController.js";


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
      const onHand = new Deck(this.container);
      const market = new Deck(this.container);

      onHand.init(constant.onHandContainer);
      market.init(constant.marketContainer);
      new DeckController({onHand, market});
    }).then(() => {
      this.container.style.opacity = 1;
    });
  }

  sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
}
