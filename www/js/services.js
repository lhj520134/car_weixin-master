angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array
  // Some fake testing data
  var chats = [{
    id: 0,
    name: '车名',
    lastText: '点击详细了解',
    xijie:'价格：$12000000',
    face: 'img/car2.jpg'
  }, {
    id: 1,
    name: '车名',
    lastText: '点击详细了解',
    xijie:'价格：$12000000',
    face: 'img/car3.jpg'
  },{
    id: 2,
    name: '车名',
    lastText: '点击详细了解',
    xijie:'价格：$12000000',
    face: 'img/car4.jpg'
  }, {
    id: 3,
    name: '车名',
    lastText: '点击详细了解',
    xijie:'价格：$12000000',
    face: 'img/car5.jpg'
  }, {
    id: 4,
    name: '车名',
    lastText: '点击详细了解',
    xijie:'价格：$12000000',
    face: 'img/car6.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    //remove: function(chat) {
    //  chats.splice(chats.indexOf(chat), 1);
    //},
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
