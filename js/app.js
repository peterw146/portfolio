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
    var available_height = $(window).height() - $('#header').outerHeight() - $('#menubar').outerHeight();
    var vertical_offset = $('#header').outerHeight() + $('#menubar').outerHeight()
    $('#main_content, #content_wrapper, .marginal, .deco, .vertical-scroll-panel').css({
      height: available_height + 'px',
      top: vertical_offset + 'px'
    });
    var marginal_width = Math.floor(($(window).width() - $('#left_decostrip').outerWidth() - $('#right_decostrip').outerWidth() - $('#main_content').outerWidth())/2);
    if (marginal_width < 0) {
      marginal_width == 0;
    }
    $('.marginal').css({
      width: marginal_width + 'px'
    });
    
    $('#left_marginal').css("left", 0 + 'px');
    $('#right_marginal').css("right", 0 + 'px');
    $('#left_decostrip').css("left", marginal_width + 'px');
    $('#right_decostrip').css("right", marginal_width + 'px');
    $('#main_content').css("left", (marginal_width + $('#left_decostrip').outerWidth()) + 'px');
  }
  
});
