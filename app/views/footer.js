define(['backbone'],function( Backbone ){

  var TodoFooter = Backbone.View.extend({
    el: $('footer'),
    initialize: function( options ){
      if( !options.collection ){
        throw new Error('Must provide a collection');
      }
      this.collection.on('add', this.renderCount, this);
      this.collection.on('change:complete', this.renderCount, this);
    },
    renderCount: function(){
      var remaining = this.collection.where({ complete: false });
      this.$('.count').text( remaining.length );
    }
  });

  return TodoFooter;

});
