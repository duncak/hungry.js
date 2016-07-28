Crafty.c('Player', {

  init: function() {
    this.requires('2D, Canvas, Color, Twoway, Gravity, Collision, Hurtable, Inventory, Picker, Floored')
    .onHit('Enemy', function(entities) {
  		if (this.hurted) {
  			return;
  		}

  		for (var i in entities) {
  			var enemy = entities[i].obj;
  			if (!enemy.stunned && this.vy <= 0) {
  				var fromDirection = (enemy.x < this.x ? 'e' : 'w');
  				this.hurt(fromDirection);
  			}
  		}
  	})
    .twoway(150, 270);
  },

  player: function(x, y) {
    this.x = x;
    this.y = y;
    this.w = 24;
    this.h = 24;
    this.color('#000');
    this.gravity('Platform');
  }
});
