Crafty.c('Princess', {

  init: function() {
    this.requires('2D, Canvas, Color, Gravity, Collision, Hurtable, Floored')
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
  	});
  },

  princess: function(x, y) {
    this.x = x;
    this.y = y;
    this.w = 24;
    this.h = 24;
    this.color('#F5F071');
    this.gravity('Platform');
  }
});
