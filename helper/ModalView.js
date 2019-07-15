import template from './template/Template.js';



class ModalView {
  constructor({className, help, buttonName}) {
    this.container = document.querySelector('.modal');
    this.btnClass = className.btnClass;
    this.modalClass = className.modalClass;
    this.helpContainerClass = className.helpContainerClass;
    this.helpContentsClass = className.helpContentsClass;
    this.buttonName = buttonName
    this.help = help;
    this.helpBtn = null;
    this.modalPopup = null;
    this.helpContainer = null;
    console.log(help);
    this.init();
  }
  // TODO: Data 받아와서 뿌리기

  init() {
    this.initRender();
    this.addClass(this.modalPopup, "show");
  }

  initRender() {
    this.rendering(template.createButton, this.container, this.btnClass, this.buttonName);
    this.helpBtn = this.selectDom(this.btnClass);

    this.rendering(template.createModal, this.container, this.modalClass);
    this.modalPopup = this.selectDom(this.modalClass);
    
    this.rendering(template.createHelpContainer, this.modalPopup, this.helpContainerClass);
    this.helpContainer = this.selectDom(this.helpContainerClass);

    this.rendering(template.createHelpList, this.helpContainer, this.helpContentsClass, this.help);
  }

  rendering(templateCreator, parentElem, className, data) {
    const newTemplate = templateCreator(className, data);
    parentElem.insertAdjacentHTML('beforeend', newTemplate);
  }

  selectDom(className) {
    return this.container.getElementsByClassName(className)[0];
  }

  addClass(dom, className) {
    dom.classList.add(className);
  }

  togglePopup() {
    this.modalPopup.classList.toggle('show');
  }
}

export default ModalView;