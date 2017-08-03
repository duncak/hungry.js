Crafty.c('Dropper', {
  init: function() {
    this._hasJustDropped = false;
  },

  drop: function(dropType, recoveryTime) {
    if (this.hasJustDropped()) {
      return;
    }
    this._hasJustDropped = true;

    var self = this;
    var item = Crafty.e(dropType);
    item.x = this.x;
    item.y = this.y-item.h;
    item.bind('EnterFrame', function () {
      var platform = self.ground;
      var dY = self.motionDelta().y * 2;
      if (platform) {
        if (dY > 1) {
          self.vx = 0;
          self.y -= dY;
        }
      }
    });

    item.vx = 120;

    this.timeout(function () {
      this._hasJustDropped = false;
    }, recoveryTime);
  },

  hasJustDropped: function() {
    return this._hasJustDropped;
  }
});
