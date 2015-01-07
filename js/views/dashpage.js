var DashView = Backbone.View.extend({
  
  initialize: function(){
    this.render();
  },
  
  events: {
  },
  
  render: function(){
    var template_main_str = '<div>dash page\
    </div>';
    
    this.$el.html(_.template(template_main_str));
    return this;
  }
  
});