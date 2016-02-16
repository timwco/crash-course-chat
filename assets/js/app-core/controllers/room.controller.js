import moment from 'moment';
import Autolinker from 'autolinker';

let RoomController = function(AuthService, RoomService, FireChat, $stateParams, $sce) {

  let vm = this;

  let chat = {};
  let messagesArr = [];

  vm.addMessage = addMessage;
  vm.deleteMessage = deleteMessage;
  vm.authed = false;
  vm.chats = [];

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
      messagesArr = FireChat.getMessages(chat);
      messagesArr.$loaded().then( () => {
        linkify(messagesArr.linkified());
      });

      // Set Room Title
      vm.title = RoomService.key(res.data.class);

    });
  }

  function linkify (arr) {
    vm.messages = arr.map( (msg) => {
      return { html: $sce.trustAsHtml(Autolinker.link(msg.html)), id: msg.id };
    });
  }

  function addMessage(message) {
    FireChat.addMessage(messagesArr, message).then( (res) => {
      vm.message = '';
      linkify(messagesArr.linkified());
    });
  }

  function deleteMessage(id) {
    let msg = messagesArr.$getRecord(id);
    FireChat.delete(messagesArr, msg).then( (res) => {
      linkify(messagesArr.linkified());
    });
  }

};

RoomController.$inject = ['AuthService', 'RoomService', 'FireChat', '$stateParams', '$sce'];
export default RoomController;
