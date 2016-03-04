import ResolvesProvider from './provider';

describe('$resolves provider', () => {
  let $resolves;
  beforeEach(() => {
    $resolves = new ResolvesProvider();
  });

  it('exposes defaults', () => {
    expect($resolves.defaults).toBeDefined();
  });

  it('exposes a $get method', () => {
    const $get = $resolves.$get;
    expect($get).toBeDefined();
  });
});
