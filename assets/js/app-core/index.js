import angular from 'angular';

import RoomController from './controllers/room.controller';
import CreateRoomController from './controllers/create-room.controller';
import UserController from './controllers/user.controller';
import WelcomeController from './controllers/welcome.controller';

import RoomService from './services/room.service';
import FireChat from './services/firechat.service';

angular
  .module('app.core', [])
  .controller('RoomController', RoomController)
  .controller('CreateRoomController', CreateRoomController)
  .controller('UserController', UserController)
  .controller('WelcomeController', WelcomeController)
  .service('RoomService', RoomService)
  .service('FireChat', FireChat)
;
