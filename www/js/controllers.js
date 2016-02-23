angular.module('starter.controllers', [])

.controller('ChatsCtrl', function($scope, Chats) {
  if(window.localStorage.getItem("profile") == null){
    
  }

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  if(window.localStorage.getItem("profile") == null){
    
  }
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('HomeCtrl', function($scope) {
  
})

.controller('NotificationCtrl', function($scope) {
  
})

.controller('AboutCtrl', function($scope) {
  
})

.controller('AccountCtrl', function($scope) {
  if(window.localStorage.getItem("profile") == null){
    $('#mainUser').hide();
  }
  else{
    // if already signup
    $('#firstUser').hide();
  }

  $scope.signUp = function (){
      //console.log($scope.name);
      var name =  $("#name").val();
      var email =  $("#email").val();
      var about = $("#about").val();
      var location = $("#location").val();

      var musicPref = {
        traditional : $("#musicPref_traditional").val(),
        rock : $("#musicPref_rock").val(),
        jazz : $("#musicPref_jazz").val(),
        pop : $("#musicPref_pop").val(),
        alternative : $("#musicPref_alternative").val(),
        dangdut : $("#musicPref_dangdut").val(),
      };

      var partnerPref = {
        trainer : $("#partnerPref_trainer").val(),
        vocalist : $("#partnerPref_vocalist").val(),
        guitarist : $("#partnerPref_guitarist").val(),
        pianist : $("#partnerPref_pianist").val(),
        bassist : $("#partnerPref_bassist").val(),
        drummer : $("#partnerPref_drummer").val(),
      };

      var data = {
        name : name,
        email : email,
        about : about,
        location : location,
        musicPref : musicPref,
        partnerPref : partnerPref,
      };

      window.localStorage.setItem("profile",JSON.stringify(data));
  };
});
