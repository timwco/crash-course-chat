let WelcomeController = function($http) {

  let vm = this;

  vm.register = register;

  activate();

  function activate() {

  }

  function register(info, roomID) {
    $http.post('/register', info).then( (res) => {
      console.log(res);
    });
  }

};

WelcomeController.$inject = ['$http'];
export default WelcomeController;
