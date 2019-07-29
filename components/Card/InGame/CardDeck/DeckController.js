import Model from "../../../Model.js";
import constant from "../constants.js";

export default class DeckController {
  constructor({onHand, market}) {
    this.onHand = onHand;
    this.market = market;
    this.onHandContainer = document.querySelector(`.${constant.onHandContainer}`);
    this.marketContainer = document.querySelector(`.${constant.marketContainer}`);
    // this.isPicked = false;
    // this.isSelceted = false;
    this.init();
  }
  
  init() {
    this.setCardsOnMarket(5, Model.allCards.level1);
    // this.changeDataOnCards(Model.market);
    this.onHand.initRender(Model.onHand, constant.onHandContainer);
    this.market.initRender(Model.market, constant.marketContainer);
    this.deckEventHandler();
  }
  
  deckEventHandler() {
    this.marketHandler();
    this.onHandHandler();
  }
  
  marketHandler() {
    this.marketContainer.addEventListener("click", (event) => {
      this.buyCards(event.target);
    });
  }
  
  onHandHandler() {
    this.onHandContainer.addEventListener("click", ({target}) => {
      this.setChoiceCard(target);
    });
  }
  
  buyCards(target) {
    if(!target.classList.contains("class-card") || this.isPicked) return;
    this.setDataInOnHand(target);
    this.removeCardData("market", target);
    this.renderOnHand();
    this.renderMarket();
    // this.isPicked = true;
  }
  
  setChoiceCard(target) {
    if(!target.classList.contains("class-card")) return;
    const pickedUnit = this.getCardData("onHand", target);
    Model.playerChoiceCard = pickedUnit;    
    this.removeCardData("onHand", target);
    this.renderOnHand();
    // this.isSelected = true;
  }
  
  // onHand로 data push
  setDataInOnHand(target) {
    const pickedUnit = this.getCardData("market", target);
    pickedUnit.idx = Model.onHand.length+1;
    Model.onHand.push(pickedUnit);
  }
  
  // onHand 부분 re-rendering
  renderOnHand() {
    const newTemplate = this.onHand.renderCards(Model.onHand);
    this.onHandContainer.innerHTML = newTemplate;
  }

  // market 부분 re-rendering
  renderMarket() {
    const newTemplate = this.market.renderCards(Model.market);
    this.marketContainer.innerHTML = newTemplate;
  }

  // 해당 index의 카드 데이터 가져오기
  getCardData(dataCol, {dataset}) {
    const idx = dataset.idx * 1 - 1;
    return Model[dataCol][idx];
  }
  
  // Model data collection 중 해당 idx의 data 삭제
  removeCardData(dataCol, {dataset}) {
    const idx = dataset.idx * 1 - 1;
    Model[dataCol].splice(idx, 1);
  }
  
  // random cards 가져오기
  setCardsOnMarket(numOfCards, cardsArr) {
    const cards = [...cardsArr],
      cardsLen = cards.length,
      marketCards = [];
    
    let randomNum;
    
    for (let i = 0; i < numOfCards; i++) {
      randomNum = Math.floor(Math.random() * cardsLen);
      
      const randomCard = cards[randomNum];
      marketCards.push(randomCard);
    }
    Model.market = marketCards;
  }

  // onHand
  // changeDataOnCards(cardModel) {
  //   cardModel.forEach((cur, index) => cur.idx = index + 1);
  //   debugger;
  // }
  
  // Market
  // setCardsOnMarket(numOfCards, ...cardCols) {
  //   const cards = Array.from(cardCols).flat(),
  //     cardsLen = cards.length,
  //     marketCards = [];
  //   let randomIdx,
  //     limit = 0;
    
  //   while(limit < numOfCards) {
  //     randomIdx = Math.floor(Math.random() * cardsLen);
  //     limit += 1;
      
  //     const randomCard = cards[randomIdx];
  //     randomCard.idx = limit + 1;
  //     marketCards.push(randomCard);
      
  //   }
  //   Model.market = marketCards;
  //   this.changeDataOnCards(Model.market);
  // }
}