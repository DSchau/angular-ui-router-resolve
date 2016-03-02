import $resolveProvider from './$resolve/provider';

import stateConfig from './decorator.config';

const module = angular.module('ui.router.$resolve', [
  'ui.router'
])
.config(stateConfig)
.provider('$resolve', $resolveProvider);

export default module.name;
