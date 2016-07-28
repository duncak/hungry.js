Crafty.c('Bird', {

  init: function() {
    this.requires('2D, Enemy, Canvas, Color, Twoway, Collision, Delay, Grounded, Stunnable, Dropper, Floored')
    .attr({x: 0, y: 0, w: 12, h: 12})
    .color('#CC0C2C')
    .bind('EnterFrame', function () {
      if (!this.stunned) {
        this.x += this.dX;
      } else {
        this.drop('Egg', '#C1E4E8', 6000);
      }
    })
    .onHit('Player', function(players) {
      for (var i in players) {
        var player = players[i].obj;
        if (player.y+player.h/2 < this.y) {
          this.stun(20, 4000, false);
        }
      }
    });

    this.dX = 2;
  },

  enemy: function(x, y) {
    this.x = x;
    this.y = y;
  }
});
