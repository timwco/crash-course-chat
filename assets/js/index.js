import angular from 'angular';
import 'angular-ui-router';
import 'angularfire';

// Custom Modules
import './app-core/index';

// Config
import config from './app-utils/config';

angular
  .module('app', ['ui.router', 'firebase', 'app.core'])
  .config(config)
;
