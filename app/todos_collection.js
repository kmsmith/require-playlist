define(['backbone', 'todo_model'],function( Backbone, TodoModel ){

// Todos Collection Constructor
var TodosCollection = Backbone.Collection.extend({
  model: TodoModel
});

return TodosCollection;

});
