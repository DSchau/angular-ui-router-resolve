import uiRouterResolve from './index';

describe('angular-ui-router-resolve', () => {
  beforeEach(angular.mock.module(uiRouterResolve));

  it('exports the module name', () => {
    expect(uiRouterResolve).toEqual('ui.router.$resolve');
  });

  it('exports appropriate provider', inject(($resolves) => {
    expect($resolves).toBeDefined();
  }));
});
