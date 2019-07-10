import ModalView from './ModalView.js';

class ModalController {
  constructor() {
    this.modalView = new ModalView();
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

const modalController = new ModalController();
modalController.init();