export default {
  startView({ title }) {
    return `
      <h1 class="main-title">${title}</h1>
      <div class="class-select"></div>
      <p class="message-select">함께 할 첫 카드를 골라주세요!</p>
    `;
  },

  cardSelectView(data) {
    return `
      <ul>
        ${data.reduce((html, item) => {
          return `
          ${html}
          <li class="class-card ${item.title}" data-class=${item.title}>
            ${item.title}
          </li>
          `;
        }, "")}
      </ul>
    `;
  },

  //TODO: map markup design
  playView({ firstClass }) {
    return `
      <p>Map template</p>
      <p>Select : ${onHand[0].title}</p>
    `;
  },

  buttonUI(className, data) {
    return `
      <button class="${className}">${data}</button>
    `;
  },

  divContainer(className) {
    return `
      <div class="${className}"></div>
    `;
  },

  ulContainer(className) {
    return `
      <ul class="${className}"></ul>
    `;
  },

  contentsList(className, datas) {
    return datas.reduce((acc, data) => {
      return (
        acc +
        `
        <li class="${className}">${data}</li>
      `
      );
    }, "");
  },

  battleFieldView({ enemyFieldCards }) {
    const template = `
    <div class="battle-board">
    ${enemyFieldCards.reduce((html, card) => {
      return `
      ${html}
      <div class="block">
        <div class="enemy-card ${card.title}">
          <div class="thumb">
            ${card.title}
          </div>
          <div class="desc">
            <div>ATK : ${card.atk}</div>
            <div>DEF : ${card.def}</div>
            <div>SPD : ${card.spd}</div>
            <div class="hp-bar"></div>
          </div>
          </div>
      </div>
      `;
    }, ``)}
      <div class="block player-block" data-id="1"></div>
      <div class="block player-block" data-id="2"></div>
      <div class="block player-block" data-id="3"></div>
      <div class="block player-block" data-id="4"></div>
      <div class="block player-block" data-id="5"></div>
    </div>`;

    return template;
  },

  battleFieldCardView({ cardData }) {
    const template = `
    <div class="player-card ${cardData.title}">
      <div class="thumb">
        ${cardData.title}
      </div>
      <div class="desc">
        <div>ATK : ${cardData.atk}</div>
        <div>DEF : ${cardData.def}</div>
        <div>SPD : ${cardData.spd}</div>
        <div class="hp-bar"></div>
      </div>
    </div>`;

    return template;
  }
};
