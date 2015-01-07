var Header = Backbone.View.extend({
  el: $('#header'),
  initialize: function(){
    this.render();
  },
  render: function(){
    
    var template_main_str = '<div> \
      <div class="site_graphic"></div> \
      <div class="site_headline">Headline</div> \
      <div class="site_byline">Byline</div> \
    </div>';
    
    this.$el.html(_.template(template_main_str));
    
  }
});