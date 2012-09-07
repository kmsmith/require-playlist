define(['backbone', 'views/show'],function( Backbone, TodoView ){

  var TodoModel = Backbone.Model.extend({
    initialize: function(){
      this.set('timestamp', new Date() );
      this.view = new TodoView({ model: this });
    },
    defaults: {
      complete: false
    }
  });

  return TodoModel;

});
