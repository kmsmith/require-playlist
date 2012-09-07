define(['backbone'],function( Backbone ){

  var AddTodo = Backbone.View.extend({
    el: $('#addTodo'),
    initialize: function( options ){
      if( !options.collection ){
        throw new Error('Must provide a collection');
      }
    },
    events: {
      'submit': 'handleSubmit'
    },
    handleSubmit: function(e){
      e.preventDefault();
      e.stopPropagation();

      var title = this.$('input[name="title"]');
      var desc = this.$('textarea');

      if( title.val().length ){
        this.collection.add({
          title: title.val(),
          description: desc.val()
        });

        title.val('');
        desc.val('');
      }
    }
  });

  return AddTodo;

});
