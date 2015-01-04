var AppView = Backbone.View.extend({
  
  initialize: function(){
    this.render();
    var header = new Header();
    var home_view = new HomeView();
  },
  
  render: function(){
    // adjust main content window css
    var available_height = $(window).height() - $('#header').height();
    $('#main_content').css({
      height: available_height + 'px'
    }); 
  }
  
});
