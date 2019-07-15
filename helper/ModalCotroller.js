class ModalController {
  constructor(modalView) {
    this.modalView = modalView;
  }
  
  init() {
    this.clickHandler();
  }

  clickHandler() {
    this.modalView.container.addEventListener('click', (e) => {
      const modalPopup = e.target.closest('.modal__popup');
      if(!modalPopup) this.modalView.togglePopup();
    });
  }
}

export default ModalController;