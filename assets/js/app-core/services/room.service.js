let RoomService = function($http) {

  this.create = (data) => {
    return $http.post('/room', data);
  }

};

RoomService.$inject = ['$http'];
export default RoomService ;
