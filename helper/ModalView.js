class ModalView {
  constructor() {
    this.container = document.querySelector('.modal__container');
    this.createModal();
  }
  createModal() {
    const template = `
      <div class='modal__container--popup'></div>
    `
    this.container.insertAdjacentHTML('beforeend', template);
    document.querySelector('.modal__container--popup')
      .setAttribute('style', 'width: 200px; height: 500px; background-color: red; display: none;');
  }

  togglePopup() {
    const modalPopup = document.querySelector('.modal__container--popup');
    modalPopup.style.display === 'none' ? modalPopup.style.display = 'block' : modalPopup.style.display = 'none';
  }
}

export default ModalView;