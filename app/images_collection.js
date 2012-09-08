define(['backbone'],function( Backbone ){

var ImagesCollection = Backbone.Collection.extend({
  url: 'http://backbone.training.quickleft.com/images'
});

return ImagesCollection;

});
