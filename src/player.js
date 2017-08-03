Crafty.c('Player', {

  init: function() {
    this.requires('2D, Canvas, Color, Gravity, Collision, Motion, Jumper, Hurtable, Inventory, Picker, Floored')
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
    .jumper(270, [Crafty.keys.UP_ARROW, Crafty.keys.W, Crafty.keys.Z])
    .bind('KeyDown', function(e) {
      if(e.key == Crafty.keys.LEFT_ARROW) {
        this.vx -= 150;
      } else if (e.key == Crafty.keys.RIGHT_ARROW) {
        this.vx += 150;
      }
    })
    .bind('KeyUp', function(e) {
      if(e.key == Crafty.keys.LEFT_ARROW) {
        this.vx += 150;
      } else if (e.key == Crafty.keys.RIGHT_ARROW) {
        this.vx -= 150;
      }
    })
    .bind('EnterFrame', function(eventData) {
      if (this.vx > 150) {
        this.vx = 150;
      }
      if (this.vx < -150) {
        this.vx = -150;
      }


    });
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
