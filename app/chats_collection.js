define(['backbone'],function( Backbone ){

var ChatsCollection = Backbone.Collection.extend({
  url: 'http://backbone.training.quickleft.com/chats'
});

return ChatsCollection;

});
