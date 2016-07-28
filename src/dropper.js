Crafty.c('Dropper', {
  init: function() {
    this._hasJustDropped = false;
  },

  drop: function(type, color, recoveryTime) {
    if (this.hasJustDropped()) {
      return;
    }
    this._hasJustDropped = true;

    var d = Crafty.e('2D, Canvas, Color, Twoway, Collision, Gravity, Floored')
    	.color(color)
      .gravity('Platform')
    	.attr({ x: this.x, y: this.y-12, w: 12, h: 12, alpha: 0.5 })
      .bind('EnterFrame', function () {
        var platform = this.ground;
        var dY = this.motionDelta().y * 2;
        if (platform) {
          if (dY > 1) {
            this.velocity().x = 0;
            this.y -= dY;
          }
          else if (!this.has('Dropable')) {
            this.alpha = 1;
            this.addComponent('Dropable')
            .dropType = type;
          }
        }
      });

      d.velocity().x = 120;

      this.timeout(function () {
        this._hasJustDropped = false;
      }, recoveryTime);
  },

  hasJustDropped: function() {
    return this._hasJustDropped;
  }
});
