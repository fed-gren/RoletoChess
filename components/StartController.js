/**
 * description: 처음 게임 시작 시, 필요한 데이터들을 받아옴.
 * 받아온 데이터를 모델에 저장하고 필요한 View에 전달.
 */

class StartController {

  //ChampionModel, StartView를 받아옴
  constructor(model, view) {
    this.model = model;
    this.view = view;

    init();
  }

  //처음 시작 시 데이터 전달
  init() {
    fetch(return championData).then(this.model.push(championData))
    .then(this.view.render(championData)).then(this.view.attachEvent());
  }
}