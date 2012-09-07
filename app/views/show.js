define([
  'backbone',
  'tpl!templates/todo.ejs'
], function( Backbone, todoTmpl ){

  var TodoView = Backbone.View.extend({
    tagName: 'li',
    initialize: function(){
      $('#todoList').append( this.render() );

      this.model.on('change', this.render, this);

      this.model.on('change:complete', function(model, completed){
        this.$el[ completed ? 'addClass': 'removeClass' ]('complete');
      }, this);
    },
    render: function(){
      this.$el.html( this.template(this.model.toJSON()) );
      return this.el;
    },
    template: todoTmpl,
    events: {
      'change input': 'complete'
    },
    complete: function(e){
      var state = this.model.get('complete');
      this.model.set('complete', !state );
    }
  });

  return TodoView;

});
