let WelcomeController = function($http, RoomService, $state) {

  let vm = this;

  vm.register = register;

  activate();

  function activate() {

  }

  function register(info, roomID) {

    RoomService.get(roomID).then( (res) => {

      info.class = res.data.class;
      info.date  = res.data.date;

      $http.post('/register', info).then( (res) => {
        $state.go('root.singleRoom', { id: roomID });
      });

    });


  }

};

WelcomeController.$inject = ['$http', 'RoomService', '$state'];
export default WelcomeController;
