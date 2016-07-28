Crafty.c('Bear', {

  init: function() {
    this.requires('2D, Enemy, Canvas, Color, Twoway, Gravity, Collision, Delay, Grounded, Stunnable, Dropper, Floored')
    .attr({x: 0, y: 0, w: 48, h: 24})
    .color('#8A7033')
    .gravity('Platform')
    .bind('EnterFrame', function () {
      if (!this.stunned) {
        this.x += this.dX;
      } else {
        this.drop('Fish', '#448A33', 6000);
      }
    })
    .onHit('Player', function(players) {
      for (var i in players) {
  			var player = players[i].obj;
        if (!player.hurted && player.vy > 0) {
          this.stun(20, 4000, true);
        }
      }
    });

    this.dX = 1;
  },

  enemy: function(x, y) {
    this.x = x;
    this.y = y;
  }
});
