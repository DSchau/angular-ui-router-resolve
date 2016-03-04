import Resolves from './service';
import ResolvesProvider from './provider';

import _$state_ from './service.spec.state.mock';

describe('$resolves service', () => {
  let $resolves;
  let $rootScope;

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    $resolves = new Resolves({
      $rootScope,
      $state: _$state_
    }, new ResolvesProvider().defaults);
  }));

  describe('$rootScope behavior', () => {
    beforeEach(() => {
      $rootScope.$emit('$stateChangeSuccess');
    });

    it('populates $rootScope property with data', () => {
      expect($rootScope.$resolves).toEqual(_$state_.$current.locals.globals);
    });
  });

  describe('$resolves service', () => {
    beforeEach(() => {
      $rootScope.$emit('$stateChangeSuccess');
    });

    it('populates $resolves service with data', () => {
      expect($resolves.persons).toBeDefined();
      expect($resolves.places).toBeDefined();
      expect($resolves.things).toBeDefined();
    });
  });
});
