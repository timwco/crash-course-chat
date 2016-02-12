let RoomController = function($http, FireChat) {

  let vm = this;

  vm.createRoom = createRoom;
  vm.addMessage = addMessage;

  activate();

  function activate() {
    vm.messages = FireChat.getAll;
    console.log(vm.messages);
  }

  function addMessage(message) {
    FireChat.create(message).then( (res) => {
      vm.message = '';
    });
  }

  function createRoom (data) {
    console.log(data);
    $http.post('/room', data).then( (res) => {
      console.log(res);
    })
  }

};

RoomController.$inject = ['$http', 'FireChat'];
export default RoomController;
