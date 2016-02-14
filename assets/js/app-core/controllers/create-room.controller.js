let CreateRoomController = function($http) {

  let vm = this;

  vm.createRoom = createRoom;

  activate();

  function activate () {
    setTimeout(function () {      
      let date = new Date().toISOString().substring(0, 10);
      let field = document.querySelector('#date');
      field.value = date;
    }, 100)
  }

  function createRoom (data) {
    console.log(data);
    $http.post('/room', data).then( (res) => {
      console.log(res);
    });
  }

};

CreateRoomController.$inject = ['$http'];
export default CreateRoomController;
