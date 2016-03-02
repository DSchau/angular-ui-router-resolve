export default function($stateProvider, $resolveProvider) {
  'ngInject';
  $stateProvider.decorator('data', (data) => {
    if ( data.resolve ) {
      $resolveProvider.add(data.resolve);
    }
    return data;
  });
}
