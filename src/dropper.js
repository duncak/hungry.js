Crafty.c('Dropper', {
  init: function() {
    this._hasJustDropped = false;
  },

  drop: function(dropType, recoveryTime) {
    if (this.hasJustDropped()) {
      return;
    }
    this._hasJustDropped = true;

    var item = Crafty.e(dropType);
    item.x = this.x;
    item.y = this.y-item.h;
    item.bind('EnterFrame', function () {
      var platform = this.ground;
      var dY = this.motionDelta().y * 2;
      if (platform) {
        if (dY > 1) {
          this.velocity().x = 0;
          this.y -= dY;
        }
      }
    });

    item.velocity().x = 120;

    this.timeout(function () {
      this._hasJustDropped = false;
    }, recoveryTime);
  },

  hasJustDropped: function() {
    return this._hasJustDropped;
  }
});
