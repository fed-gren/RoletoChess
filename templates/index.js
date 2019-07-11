export default {
  startView({title}) {
    return `
      <h1 class="main-title">${title}</h1>
      <div class="class-select"></div>
      <p class="message-select">함께 할 첫 카드를 골라주세요!</p>
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
  mapView({firstClass}) {
    return `
      <p>Map template</p>
      <p>Select : ${firstClass}</p>
    `
  }
};
