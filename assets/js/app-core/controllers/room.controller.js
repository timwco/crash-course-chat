let RoomController = function($http, FireChat, $stateParams) {

  let vm = this;

  let chat = [];

  vm.addMessage = addMessage;

  activate();

  function activate() {
    chat = FireChat.createChat('room-' + $stateParams.id);
    vm.messages = FireChat.getMessages(chat);
    console.log(vm.messages);
  }

  function addMessage(message) {
    FireChat.addMessage(vm.messages, message).then( (res) => {
      vm.message = '';
    });
  }

};

RoomController.$inject = ['$http', 'FireChat', '$stateParams'];
export default RoomController;
