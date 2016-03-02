import $resolveService from './service';

export default class $resolveProvider {
  constructor() {
    this.resolves = {};

    this.defaults = {
      propertyName: '$resolve'
    };
  }

  add(resolveObj, fn = angular.noop) {
    if ( typeof resolveObj === 'object' ) {
      angular.extend(this.resolves, resolveObj);
    } else {
      this.resolves[resolveObj] = fn;
    }
    return this;
  }

  $get($rootScope, $q) {
    'ngInject';
    let resolves = {};
    for ( const name in this.resolves ) {
      resolves[name] = $q.when(this.resolves[name]);
    }
    return new $resolveService({
      $rootScope
    }, resolves, this.defaults);
  }
}
