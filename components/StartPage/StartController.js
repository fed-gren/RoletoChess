//카드 선택 되면, MapView 렌더링

import Deck from "../Card/InGame/CardDeck/Deck.js";
import Model from "../Model.js";
import constant from "../Card/InGame/constants.js";
import DeckController from "../Card/InGame/CardDeck/DeckController.js";


export default class StartController {
  constructor({ startView, mapView, }) {
    this.startView = startView;
    this.selectView = this.startView.selectView;
    this.mapView = mapView;

    this.container = document.querySelector(".roletoChess-container");
    this.container.style.transition = "200ms opacity";

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
    }).then(() => {
      const onHand = new Deck(Model.onHand, this.container);
      const market = new Deck(Model.allCards.level1, this.container);

      onHand.init(constant.onHandContainer);
      market.init(constant.marketContainer);
      return {onHand, market};
    }).then( instCollector => {
      new DeckController(instCollector);
    });

  }

  sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
}
