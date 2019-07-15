export default {
  createButton(className, data) {
    return `
      <button class="${className}">${data}</button>
    `
  },

  createModal(className) {
    return `
      <div class="${className}"></div>
    `
  },

  createHelpContainer(className) {
    return `
      <ul class="${className}"></ul>
    `
  },

  createHelpList(className, datas) {
    return datas.reduce((acc, data) => {
      return acc + 
      `
        <li class="${className}">${data}</li>
      `
    }, '')
  }
}