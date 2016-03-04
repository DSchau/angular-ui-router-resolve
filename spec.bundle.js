'use strict';
import 'angular';
import 'angular-ui-router';
import 'angular-mocks';

import './src/';

const context = require.context('./src', true, /.*(spec|mocks?)\.js$/);

context.keys().forEach(context);