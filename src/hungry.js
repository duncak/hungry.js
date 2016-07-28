Crafty.c('Hungry', {

  init: function(x, y) {
    this.addComponent('2D');
    this.addComponent('Canvas');
    this.addComponent('Color');
    this.addComponent('Twoway');
    this.addComponent('Gravity');
    this.addComponent('Collision');
    this.addComponent('Delay');
    this.addComponent('Hurtable');
    this.addComponent('Inventory');
    this.addComponent('Picker');
    this.attr({ x: 0, y: stageHeight-24-24, w: 24, h: 24 })
  }
  Crafty.e('player, 2D, Canvas, Color, Twoway, Gravity, Collision, Delay, Hurtable, Inventory, Picker')
  	.color('#000')
  	.attr({ x: 0, y: stageHeight-24-24, w: 24, h: 24 })
  	.twoway(150, 250)
  	.gravity('solid')
    .onHit("enemy", function(entities) {
  		if (this.hurted) {
  			return;
  		}

  		for (var i in entities) {
  			var enemy = entities[i].obj;
  			if (this.y+this.h-1 < enemy.y) {
  				if (!enemy.stunned) {
  					var toDirection = (this.x < enemy.x ? 'e' : 'w');
  					enemy.drop(toDirection);
  				}

  				enemy.stun(20, 4000);
  			}
  			else if (!enemy.stunned) {
  				var fromDirection = (enemy.x < this.x ? 'e' : 'w');
  				this.hurt(fromDirection);
  			}
  		}
  	})
  	.bind('EnterFrame', function () {
  		if (this.x > stageWidth - this.w) {
  			this.x = stageWidth - this.w;
  		}

  		if (this.x < 0) {
  			this.x = 0;
  		}
  	});
});
