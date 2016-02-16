let AdminController = function(RoomService, AuthService, $stateParams, $state) {

  let vm = this;

  vm.createRoom = createRoom;
  vm.alert = false;
  vm.authed = false;

  activate();

  // Verify User Logged in
  function activate() {

    if ($stateParams.c) { vm.alert = true;}

    AuthService.verify().then( (res) => {
      vm.authed = res.data.authed;
    });

    RoomService.getRooms().then( (res) => {
      vm.rooms = res.data;
    });

  }

  function createRoom (data) {
    RoomService.create(data).then( (res) => {
      $state.go('root.singleRoom', { id: res.data.roomID });
    });
  }


};

AdminController.$inject = ['RoomService', 'AuthService', '$stateParams', '$state'];
export default AdminController;
