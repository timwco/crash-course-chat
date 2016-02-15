import moment from 'moment';

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

      // Set Room Description & Details
      vm.date = moment(res.data.date).format('MMMM, Do YYYY');
      vm.description = $sce.trustAsHtml(res.data.desc);

      // Create Chat Connection
      chat = FireChat.createChat('room-' + res.data.id);
      vm.messages = FireChat.getMessages(chat);

      // Set Room Title
      vm.title = RoomService.key(res.data.class);

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
