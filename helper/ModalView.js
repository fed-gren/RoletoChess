class ModalView {
  constructor() {
    this.container = document.querySelector('.modal__container');
    this.modalPopup = null;
    this.init();
  }

  init() {
    this.addModal();
  }

  addModal() {
    const modalTemplate = this.createModal();
    this.container.insertAdjacentHTML('beforeend', modalTemplate);
    this.modalPopup = this.container.querySelector('.modal__container--popup');
  }

  createModal() {
    return `
      <div class='modal__container--popup show'></div>
    `
  }

  togglePopup() {
    this.modalPopup.classList.toggle('show');
  }

}

export default ModalView;