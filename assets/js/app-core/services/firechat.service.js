let FireChat = function($firebaseObject, $firebaseArray) {

  this.createChat = (name) => new Firebase('https://crashcoursechat.firebaseio.com/rooms/' + name + '/messages');

  this.getMessages = (ref) => $firebaseArray(ref);

  this.addMessage = (ref, message) => ref.$add(message);

  // this.get = (messageId) => $firebaseObject(ref.child('messages').child(messageId)).$asObject();
  //
  // this.delete = (message) => messages.$remove(message);

};

FireChat.$inject = ['$firebaseObject', '$firebaseArray'];
export default FireChat;
