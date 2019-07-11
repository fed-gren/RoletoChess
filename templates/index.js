export default {
  startView({title}) {
    return `
      <h1 class="main-title">${title}</h1>
      <div class="class-select"></div>
      <p class="message-select">시작 카드를 선택하면 게임이 시작됩니다.</p>
    `;
  },

  startClassSelectView(data) {
    return `
      <ul>
        ${data.reduce((html, item) => {
          return `
          ${html}
          <li class="class-card ${item.title}" data-class=${item.title}>
            ${item.title}
          </li>
          `;
        }, ``)}
      </ul>
    `;
  },

  //TODO: map markup design
  mapView() {
    return `<p>Map template</p>`
  }
};
