let config = function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })

    // Login
    .state('root.login', {
      url: '/login',
      controller: 'UserController as vm',
      templateUrl: 'templates/login.tpl.html'
    })

    // Admins
    .state('root.create', {
      url: '/create',
      controller: 'CreateRoomController as vm',
      templateUrl: 'templates/create.tpl.html'
    })

    // Guests
    .state('root.welcome', {
      url: '/',
      controller: 'WelcomeController as vm',
      templateUrl: 'templates/welcome.tpl.html'
    })

    // Room
    .state('root.singleRoom', {
      url: '/room/:id',
      controller: 'RoomController as vm',
      templateUrl: 'templates/room.tpl.html'
    })
  ;

  $urlRouterProvider.otherwise('/');


};

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export default config;
