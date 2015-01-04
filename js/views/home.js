var HomeView = Backbone.View.extend({
  
  el: $('#main_content'),
  
  initialize: function(){
    this.render();
  },
  
  render: function(){
    var template_main_str = '<span>\
                            Home</span>';
    
    this.$el.html(_.template(template_main_str));
  }
});