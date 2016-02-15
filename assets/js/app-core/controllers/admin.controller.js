let AdminController = function($http) {

  let vm = this;

  activate();

  function activate() {
    $http.get('/auth/verify');
  }


};

AdminController.$inject = ['$http'];
export default AdminController;
