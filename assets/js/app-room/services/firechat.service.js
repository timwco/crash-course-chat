let FireChat = function($firebaseObject, $firebaseArray) {

  const ref = new Firebase('https://crashcoursechat.firebaseio.com/messages');
  let messages = $firebaseArray(ref);

  this.getAll = messages;

  this.create = (message) => messages.$add(message);

  this.get = (messageId) => $firebaseObject(ref.child('messages').child(messageId)).$asObject();

  this.delete = (message) => messages.$remove(message);

};

FireChat.$inject = ['$firebaseObject', '$firebaseArray'];
export default FireChat;
