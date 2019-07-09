/**
 * description: 챔피언 관련 데이터 가지고 있는 Model
 * 챔피언 데이터를 입력받음.
 */

class ChampionModel {
  constructor() {
    this.store = [];
  }

  push(data) {
    this.store.push(data);
  }
}
