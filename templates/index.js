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
      <p>Select : ${firstClass}</p>
    `;
  },

  createButton(className, data) {
    return `
      <button class="${className}">${data}</button>
    `;
  },

  createModal(className) {
    return `
      <div class="${className}"></div>
    `;
  },

  createHelpContainer(className) {
    return `
      <ul class="${className}"></ul>
    `;
  },

  createHelpList(className, datas) {
    return datas.reduce((acc, data) => {
      return (
        acc +
        `
        <li class="${className}">${data}</li>
      `
      );
    }, "");
  },

  battleFieldView({ playerFieldCards, enemyFieldCards }) {
    const template = `
    <div class="battle-board">
    ${enemyFieldCards.reduce((html, card) => {
      return `
      ${html}
      <div class="block">
        <div class="enemy-card ${card.title}">${card.title}</div>
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
  }
};
