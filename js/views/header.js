var Header = Backbone.View.extend({
  el: $('#header'),
  initialize: function(){
    this.render();
  },
  render: function(){
    
    var template_main_str = '<span>Header</span>';
    
    this.$el.html(_.template(template_main_str));
    
  }
});