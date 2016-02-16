let RoomService = function($http) {


  this.create = (data) => {
    return $http.post('/room', data);
  };

  this.get = (id) => {
    return $http.get('/room/' + id);
  };

  this.key = (abv) => {
    switch (abv) {
      case 'js': return'JavaScript';
      case 'rb': return'Ruby';
      case 'de': return'Design';
      case 'ios': return'iOS';
      case 'java': return'Java';
      case 'net': return'.NET';
    };
  };

  this.getRooms = () => {
    return $http.get('room');
  }


};

RoomService.$inject = ['$http'];
export default RoomService ;
