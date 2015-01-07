var AppView = Backbone.View.extend({
  
  initialize: function(){
    
    this.render();
    var header = new Header();
    var menubar = new Menubar();
    
    this.approuter = new appRouter();
    Backbone.history.start();
    
    $(window).on('resize', this.render);
  },
  
  render: function(){
    // adjust main content window css
    var available_height = $(window).height() - $('#header').outerHeight() - $('#menubar').outerHeight();
    $('#main_content, #content_wrapper, .marginal, .deco').css({
      height: available_height + 'px'
    });
    
    var marginal_width = Math.floor(($(window).width() - $('#left_decostrip').outerWidth() - $('#right_decostrip').outerWidth() - $('#main_content').outerWidth())/2) - 0.5;
    if (marginal_width < 0) {
      marginal_width == 0;
    }
    $('.marginal').css({
      width: marginal_width + 'px'
    });
    
  }
  
});
