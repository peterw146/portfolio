var Header = Backbone.View.extend({
  el: $('#header'),
  
  initialize: function(){
    this.render();
    this.init_puzzle();
  },
  
  events: {
    'click .site_graphic' : 'togglePuzzle'
  },
  
  render: function(){
    
    var template_main_str = '<div> \
      <div class="site_graphic"> \
      </div> \
      <div class="site_headline">Headline</div> \
      <div class="site_byline">Byline</div> \
    </div>';
    
    this.$el.html(_.template(template_main_str));
    
  },
  
  init_puzzle: function() {
    console.log('initialise puzzle');
    this.total_count = 0;
    this.square_space = 34;
    this.total_cycles = 500;
    this.square_move_duration = 250;
    this.interval_between_moves = 700;
    this.puzzle_blocked = false;
    
    this.squares = [ [], [], [] ];
    
    for (var y=0; y<3; y++) {
      for (var x=0; x<3; x++) {
        if (x == 2 && y == 2) {
          this.squares[x][y] = null;
          break;
        }
        this.squares[x][y] = 'puz' + String(x) + String(y);
        var gs = '<img id="puz' + String(x) + String(y) + '" class="puzzle_piece" src="images/puz_' + String(y) + String(x) + '.png" style="left:' + Number(x * this.square_space) + 'px;top:' + Number(y * this.square_space) + 'px;" \>';
        $('.site_graphic').append(gs);
      }
    }
    
    this.vacant_x = 2;
    this.vacant_y = 2;
    this.move_puzzle();
  },
  
  togglePuzzle: function() {
    console.log('toggle puzzle');
    if (this.puzzle_blocked) {
      this.puzzle_blocked = false;
      this.move_puzzle();
    } else {
      this.puzzle_blocked = true;
    }
  },
  
  move_puzzle: function() {
    this.total_count++;
    
    if (this.puzzle_blocked || (this.total_count > this.total_cycles)) {
      return;
    }
    
    // nine options
    var choices = [];
    if (this.vacant_x == 2 && this.vacant_y == 2) {
      choices.push({x:1, y:2});
      choices.push({x:2, y:1});
    } else if (this.vacant_x == 0 && this.vacant_y == 0) {
      choices.push({x:1, y:0});
      choices.push({x:0, y:1});
    } else if (this.vacant_x == 0 && this.vacant_y == 2) {
      choices.push({x:0, y:1});
      choices.push({x:1, y:2});
    } else if (this.vacant_x == 2 && this.vacant_y == 0) {
      choices.push({x:1, y:0});
      choices.push({x:2, y:1});
    } else if (this.vacant_x == 1 && this.vacant_y == 0) {
      choices.push({x:0, y:0});
      choices.push({x:2, y:0});
      choices.push({x:1, y:1});
    } else if (this.vacant_x == 1 && this.vacant_y == 2) {
      choices.push({x:0, y:2});
      choices.push({x:2, y:2});
      choices.push({x:1, y:1});
    } else if (this.vacant_x == 0 && this.vacant_y == 1) {
      choices.push({x:0, y:0});
      choices.push({x:0, y:2});
      choices.push({x:1, y:1});
    } else if (this.vacant_x == 2 && this.vacant_y == 1) {
      choices.push({x:2, y:0});
      choices.push({x:2, y:2});
      choices.push({x:1, y:1});
    } else if (this.vacant_x == 1 && this.vacant_y == 1) {
      choices.push({x:0, y:1});
      choices.push({x:1, y:0});
      choices.push({x:2, y:1});
      choices.push({x:1, y:2});
    }
     
    var chosen = choices[Math.floor(Math.random()*choices.length)];
    var moving_id = '#' + this.squares[chosen.x][chosen.y];
    this.squares[this.vacant_x][this.vacant_y] = $(moving_id).attr('id');
    this.squares[chosen.x][chosen.y] = null;
    
    //four options
    if (chosen.x > this.vacant_x) {
      $(moving_id).animate({
        left: "-=" + this.square_space
      }, {
        duration: this.square_move_duration,
      });
    } else if (chosen.x < this.vacant_x) {
      $(moving_id).animate({
        left: "+=" + this.square_space
      }, {
        duration: this.square_move_duration,
      });
    } else if (chosen.y > this.vacant_y) {
      $(moving_id).animate({
        top: "-=" + this.square_space
      }, {
        duration: this.square_move_duration,
      });
    } else if (chosen.y < this.vacant_y) {
      $(moving_id).animate({
        top: "+=" + this.square_space
      }, {
        duration: this.square_move_duration,
      });
    }
    
    this.vacant_x = chosen.x;
    this.vacant_y = chosen.y;
    
    var self = this;
    var to = setTimeout(function() {
      self.move_puzzle();
    },self.interval_between_moves);
    
  }
});