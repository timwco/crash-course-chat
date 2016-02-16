import angular from 'angular';

import RoomController from './controllers/room.controller';
import AdminController from './controllers/admin.controller';
import WelcomeController from './controllers/welcome.controller';

import RoomService from './services/room.service';
import FireChat from './services/firechat.service';
import AuthService from './services/auth.service';

import momentFilter from './filters/moment.filter';
import linkifyFilter from './filters/linkify.filter';

angular
  .module('app.core', [])
  .controller('RoomController', RoomController)
  .controller('AdminController', AdminController)
  .controller('WelcomeController', WelcomeController)
  .service('RoomService', RoomService)
  .service('FireChat', FireChat)
  .service('AuthService', AuthService)
  .filter('moment', momentFilter)
  .filter('linkify', linkifyFilter)
;
