import angular from 'angular';

import RoomController from './controllers/room.controller';

import RoomService from './services/room.service';
import FireChat from './services/firechat.service';

angular
  .module('app.room', [])
  .controller('RoomController', RoomController)
  .service('RoomService', RoomService)
  .service('FireChat', FireChat)
;
