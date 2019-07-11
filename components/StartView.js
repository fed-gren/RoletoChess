import ClassSelectView from "./ClassSelectView.js";
import templates from "../templates/index.js";
import Model from "./Model.js";

/**
 * description: 첫 화면 UI
 * render 함수가 실행되고 나면 전체 페이지 보여줌.
 */

export default class StartView {
  constructor(container) {
    this.classSelectView = new ClassSelectView();

    //DOM cacheing
    this.container = container;

    this.render();
    this.classSelectView.attachEvent();
  }

  render() {
    //데이터 받아와서 템플릿 완성 시키고 mainContents DOM에 넣고
    //화면 보여주기.
    this.template = templates.startView(Model);
    this.container.innerHTML = this.template;

    this.classSelect = this.container.querySelector(".class-select");
    this.classSelect.innerHTML = this.classSelectView.template;
  }
}
