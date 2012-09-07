define([
  'backbone',
  'views/add',
  'views/footer'
], function( Backbone, AddTodo, TodoFooter ){

  // Collection View Constructor
  var TodosView = Backbone.View.extend({
    el: $('#todoList'),
    initialize: function(){
      this.form = new AddTodo({ collection: this.collection });
      this.footer = new TodoFooter({ collection: this.collection });
    }
  });

  return TodosView;
});
