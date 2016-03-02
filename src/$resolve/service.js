export default class $resolveService {
  constructor({ $rootScope }, resolves, defaults) {
    this.resolves = resolves;
    this.$rootScope = $rootScope;
    this.defaults = defaults;

    this.$$init();
  }

  $$init() {
    for ( const name in this.resolves ) {
      this.resolves[name]
        .then((resolved) => {
          this[name] = resolved;
          if ( this.defaults.propertyName ) {
            angular.extend({}, $rootScope[this.defaults.propertyName], {
              [name]: resolved
            });
          }
        });
    }
  }
}
