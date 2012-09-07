require([
  'underscore',
  'backbone',
  'views/list',
  'todos_collection'
], function( _, Backbone, TodosList, TodosCollection ){

$(function(){
  window.Todos = new TodosList({ collection: new TodosCollection() });
});


});
