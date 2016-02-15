let CreateRoomController = function($http, $state) {

  let vm = this;

  vm.createRoom = createRoom;

  function createRoom (data) {
    console.log(data);
    $http.post('/room', data).then( (res) => {
      $state.go('root.singleRoom', { id: res.data.roomID });
    });
  }

};

CreateRoomController.$inject = ['$http', '$state'];
export default CreateRoomController;
