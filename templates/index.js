export default {
  startView(data) {
    return `
      <h1>${data.title}</h1>
      <div class="select-class"></div>
    `;
  },

  startClassSelectView(data) {
    return `
      <ul>
        ${data.reduce((html, item) => {
          return `
          ${html}
          <li class="class-card">
            ${item.title}
          </li>
          `;
        }, ``)}
      </ul>
    `;
  }
};
