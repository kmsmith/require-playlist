define(['backbone'],function( Backbone ){

var VideosCollection = Backbone.Collection.extend({
  url: 'http://backbone.training.quickleft.com/videos'
});

return VideosCollection;

});
