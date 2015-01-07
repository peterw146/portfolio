var appRouter = Backbone.Router.extend({
  
  routes: {
    "": "showHome",
    "dash": "showDash"
  },
  
  showHome: function() {
    console.log('Route to home');
    Backbone.history.navigate('');
    if (this.main_content_view) {
      this.main_content_view.unbind();
      this.main_content_view.remove();
    }
    this.main_content_view = new HomeView();
    $('#main_content').html(this.main_content_view.render().el);
  },
  
  showDash: function() {
    console.log('Route to dash');
    Backbone.history.navigate('/dash');
    if (this.main_content_view) {
      this.main_content_view.unbind();
      this.main_content_view.remove();
    }
    this.main_content_view = new DashView();
    $('#main_content').html(this.main_content_view.render().el);
  },
  
});
  