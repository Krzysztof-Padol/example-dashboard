import {DONUT_COLORS} from './../constants/colors';

export default class BaseContainerController {
  /** @ngInject */
  constructor(stats) {
    this.colors = DONUT_COLORS;
    this.loading = true;
    this.stats = stats;

    this.onDataSuccess = this.onDataSuccess.bind(this);
    this.getData()
      .then(this.onDataSuccess);
  }

  onDataSuccess(response) {
    this.data = response.data;
    this.loading = false;
  }

  getData() {
    return this.stats.getCommon();
  }
}
