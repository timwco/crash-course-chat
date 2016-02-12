let config = function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })

    .state('root.landing', {
      url: '/',
      controller: 'RoomController as vm',
      templateUrl: 'templates/landing.tpl.html'
    })

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
