import $resolvesProvider from './$resolves/provider';

const module = angular.module('ui.router.$resolve', [
  'ui.router'
])
.provider('$resolves', $resolvesProvider)
.run(function($resolves) {
  'ngInject';
});

export default module.name;
