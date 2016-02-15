let RoomController = function(AuthService, RoomService, FireChat, $stateParams, $sce) {

  let vm = this;

  let chat = [];

  vm.addMessage = addMessage;
  vm.authed = false;

  activate();

  function activate() {
    AuthService.verify().then( (res) => {
      vm.authed = res.data.authed;
    });

    RoomService.get($stateParams.id).then( (res) => {
      console.log(res);
      vm.room = res.data;
      vm.description = $sce.trustAsHtml(res.data.desc);

      chat = FireChat.createChat('room-' + res.data.id);
      vm.messages = FireChat.getMessages(chat);

    });
  }

  function addMessage(message) {
    FireChat.addMessage(vm.messages, message).then( (res) => {
      vm.message = '';
    });
  }

};

RoomController.$inject = ['AuthService', 'RoomService', 'FireChat', '$stateParams', '$sce'];
export default RoomController;
