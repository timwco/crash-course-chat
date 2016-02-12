import angular from 'angular';
import 'angular-ui-router';
import 'angularfire';

// Custom Modules
import './app-room/index';

// Config
import config from './app-utils/config';

angular
  .module('app', ['ui.router', 'firebase', 'app.room'])
  .config(config)
;
