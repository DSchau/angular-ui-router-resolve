import $resolvesService from './service';

export default class $resolveProvider {
  constructor() {
    this.defaults = {
      propertyName: '$resolves',
      ev: '$stateChangeSuccess'
    };
  }

  $get($rootScope, $state) {
    'ngInject';
    return new $resolvesService({ $rootScope, $state }, this.defaults);
  }
}
