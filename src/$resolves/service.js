export default class $resolvesService {
  constructor({ $rootScope, $state }, defaults) {
    this.$rootScope = $rootScope;
    this.$state = $state;
    this.defaults = defaults;

    if ( this.defaults.propertyName ) {
      this.$rootScope[this.defaults.propertyName] = {};
    }

    this.init = this.$$init();
  }

  $$init() {
    return this.$rootScope.$on(this.defaults.ev, () => {
      let globals;
      try {
        globals = this.$state.$current.locals.globals;
      } catch(err) {
        globals = {};
      }

      for ( const name in globals ) {
        const value = globals[name];
        this[name] = value;
        if ( this.defaults.propertyName ) {
          angular.extend(this.$rootScope[this.defaults.propertyName], {
            [name]: value
          });
        }
      }
    });
  }

  $$deregister() {
    (this.init||angular.noop)();
  }
}
