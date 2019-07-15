import ModalView from './ModalView.js';
import ModalController from './ModalCotroller.js';
import config from './constants.js';

export default class Helper {
  init() {
    const modalView = new ModalView(config);
    const modalController = new ModalController(modalView)
    modalController.init();
  }
}