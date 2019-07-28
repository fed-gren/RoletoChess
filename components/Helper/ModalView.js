import template from "../../templates/index.js";

class ModalView {
  constructor({className, help, buttonName, helpTitle, helpContents}) {
    this.gameMain = document.querySelector(".contents");
    this.container = this.gameMain.querySelector(".modal");
    this.btnClass = className.btnClass;
    this.modalClass = className.modalClass;
    this.helpContainerClass = className.helpContainerClass;
    this.helpContentsClass = className.helpContentsClass;
    this.helpBackgroundClass = className.helpBackgroundClass;

    this.buttonName = buttonName;
    this.help = help;
    this.helpBtn = null;
    this.modalPopup = null;
    this.helpContainer = null;
    this.helpBackground = null;
    this.helpTitle = helpTitle;
    this.helpContents = helpContents;

    this.init();
  }
  // TODO: Data 받아와서 뿌리기

  init() {
    this.initRender();
    this.addClass(this.modalPopup, "show");
    this.addClass(this.helpBackground, "show");
  }

  initRender() {
    this.rendering(template.buttonUI, this.container, this.btnClass, this.buttonName);
    this.helpBtn = this.selectDom(this.btnClass);

    this.rendering(template.divContainer, this.gameMain, this.helpBackgroundClass);
    this.helpBackground = this.selectDom(this.helpBackgroundClass);

    this.rendering(template.divContainer, this.helpBackground, this.modalClass);
    this.modalPopup = this.selectDom(this.modalClass);

    this.rendering(template.ulContainer, this.modalPopup, this.helpContainerClass);
    this.helpContainer = this.selectDom(this.helpContainerClass);

    this.rendering(template.contentsList, this.helpContainer, this.helpContentsClass, {title: this.helpTitle, contents:this.helpContents });
  }

  rendering(templateCreator, parentElem, className, messages) {
    const newTemplate = templateCreator(className, messages);
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
    this.helpBackground.classList.toggle("show");
  }
}

export default ModalView;