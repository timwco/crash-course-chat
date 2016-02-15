let RoomController = function(AuthService, FireChat, $stateParams) {

  let vm = this;

  let chat = [];

  vm.addMessage = addMessage;
  vm.authed = false;

  activate();

  function activate() {
    AuthService.verify().then( (res) => {
      vm.authed = res.data.authed;
    });

    chat = FireChat.createChat('room-' + $stateParams.id);
    vm.messages = FireChat.getMessages(chat);
  }

  function addMessage(message) {
    FireChat.addMessage(vm.messages, message).then( (res) => {
      vm.message = '';
    });
  }

};

RoomController.$inject = ['AuthService', 'FireChat', '$stateParams'];
export default RoomController;
