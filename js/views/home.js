var HomeView = Backbone.View.extend({
  
  className: 'vertical-scroll-panel',
  
  initialize: function(){
    this.render();
  },
  
  events: {
    'click .subheader_block' : 'expandHiddenContent'
  },
  
  render: function(){
    var template_main_str = '<div class="text_block">Text Block Content</div> \
      <div class="subheader_block"> \
        <div class="subheader_prefix"> \
          <img src="images/bulletpoint.png" /> \
        </div> \
        <div class="subheader_text">Subheader text: Click to expand</div> \
        <div class="subheader_collapser start_hidden"> \
          <img src="images/collapse.png" /> \
        </div> \
        <div class="subheader_expandable start_hidden">\
          <p>Sample expandable text. More sample expandable text. Sample expandable text. Sample expandable text. More sample expandable text. Sample expandable text.</p>\
          <p>Sample expandable text. More sample expandable text. Sample expandable text. Sample expandable text. More sample expandable text. Sample expandable text. Sample expandable text. More sample expandable text. Sample expandable text.</p>\
        </div> \
      </div> \
     <div class="subheader_block"> \
        <div class="subheader_prefix"> \
          <img src="images/bulletpoint.png" /> \
        </div> \
        <div class="subheader_text">Subheader text: Click to expand</div> \
        <div class="subheader_collapser start_hidden"> \
          <img src="images/collapse.png" /> \
        </div> \
        <div class="subheader_expandable start_hidden">\
          <p>Expandable text content goes here</p>\
        </div> \
      </div> \
      <div class="subheader_block"> \
        <div class="subheader_prefix"> \
          <img src="images/bulletpoint.png" /> \
        </div> \
        <div class="subheader_text">Subheader text: Click to expand</div> \
        <div class="subheader_collapser start_hidden"> \
          <img src="images/collapse.png" /> \
        </div> \
        <div class="subheader_expandable start_hidden">\
          <p>Expandable text content goes here</p>\
        </div> \
      </div>';
    
    this.$el.html(_.template(template_main_str));
    
    this.$el.css({
      "height": $('#main_content').height() + 'px',
      "overflow-x": "hidden",
      "overflow-y": "scroll"
    })
    return this;
  },
  
  expandHiddenContent: function(e) {
    $(e.currentTarget).find('.start_hidden').slideToggle(250);
  }
  
});