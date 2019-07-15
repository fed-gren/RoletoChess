import ModalView from './ModalView.js';
import ModalController from './ModalCotroller.js';
import config from './config.js';

class Helper {
  init() {
    const modalView = new ModalView(config);
    const modalController = new ModalController(modalView)
    modalController.init();
  }
}

const helper = new Helper();
helper.init();

