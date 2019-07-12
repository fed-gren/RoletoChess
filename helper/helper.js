import ModalView from './ModalView.js';
import ModalController from './ModalCotroller.js';

const modalView = new ModalView();
const modalController = new ModalController(modalView)
modalController.init();