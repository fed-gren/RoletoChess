class ModalController {
  constructor(modalView) {
    this.modalView = modalView;
    this.container = document.querySelector('.modal__container');
  }
  
  init() {
    this.clickHandler();
  }

  clickHandler() {
    this.container.addEventListener('click', (e) => {
      this.modalView.togglePopup();
    });
  }
}

export default ModalController;