# angular-ui-router-resolve

[![Build Status](https://img.shields.io/npm/v/angular-ui-router-resolve.svg)](https://www.npmjs.com/package/angular-ui-router-resolve)

[![David](https://img.shields.io/david/DSchau/angular-ui-router-resolve.svg)](https://david-dm.org/DSchau/angular-ui-router-resolve)

A module to shim support for exposing resolves (via `$stateProvider`) on a $rootScope object, as well as exposing a `$resolves` service. This is particularly useful in a component based architecture, where components are used as the main routing piece (which have their own controller decoupled from `$stateProvider` controller).

## Install

```shell
npm install angular-ui-router-resolve --save
```

## Usage

`angular-ui-router-resolve` is exposed as a UMD module, and so can be seamlessly integrated with your module loader of choice. For instance:

```javascript
import uiRouter from 'angular-ui-router';
import uiRouterResolve from 'angular-ui-router-resolve';

export default angular.module('yourApp', [
  uiRouter,
  uiRouterResolve
]);
```

After importing the module into your application, any resolves are available on `$rootScope` as well as the `$resolves` service.

## Using the `$resolves` service

Consider the following state config:

```javascript
export default function someComponentConfig($stateProvider) {
  'ngInject';
  $stateProvider.state('yourApp.someComponent', {
    url: '/some-component',
    template: '<some-component></some-component>',
    resolve: {
      persons: function($http) {
        'ngInject';
        return $http.get('/some-data-source');
      }
    }
  });
}
```

To get that `persons` resolve property, a common approach is to add a basic controller to the state config (which works fine), and then add a bindings to `someComponent`. However, the following can now be done:

```javascript
export default class SomeComponentController {
  constructor($resolves) {
    'ngInject';
    this.persons = $resolves.persons;
  }
}
```