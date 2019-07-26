import template from "../../templates/index.js";

class ModalView {
  constructor({className, help, buttonName}) {
    this.container = document.querySelector(".modal");
    this.gameMain = document.querySelector(".contents");
    this.btnClass = className.btnClass;
    this.modalClass = className.modalClass;
    this.helpContainerClass = className.helpContainerClass;
    this.helpContentsClass = className.helpContentsClass;
    this.buttonName = buttonName;
    this.help = help;
    this.helpBtn = null;
    this.modalPopup = null;
    this.helpContainer = null;

    this.init();
  }
  // TODO: Data 받아와서 뿌리기

  init() {
    this.initRender();
    this.addClass(this.modalPopup, "show");
  }

  initRender() {
    this.rendering(template.buttonUI, this.container, this.btnClass, this.buttonName);
    this.helpBtn = this.selectDom(this.btnClass);

    this.rendering(template.divContainer, this.gameMain, this.modalClass);
    this.modalPopup = this.selectDom(this.modalClass);

    this.rendering(template.ulContainer, this.modalPopup, this.helpContainerClass);
    this.helpContainer = this.selectDom(this.helpContainerClass);

    this.rendering(template.contentsList, this.helpContainer, this.helpContentsClass, this.help);
  }

  rendering(templateCreator, parentElem, className, data) {
    const newTemplate = templateCreator(className, data);
    parentElem.insertAdjacentHTML("beforeend", newTemplate);
  }

  selectDom(className) {
    return document.getElementsByClassName(className)[0];
  }

  addClass(dom, className) {
    dom.classList.add(className);
  }

  togglePopup() {
    this.modalPopup.classList.toggle("show");
  }
}

export default ModalView;