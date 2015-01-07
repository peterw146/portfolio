var Menubar = Backbone.View.extend({
  el: $('#menubar'),
  initialize: function(){
    this.render();
  },
  render: function(){
    
    var template_main_str = '<div class="menu_item">\
      <a href="#">Main</a>\
      <a href="#dash">DashHound</a>\
      </div>';
    
    this.$el.html(_.template(template_main_str));
    
  }
});