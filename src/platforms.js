Crafty.c('Platforms', {

  init: function() {
    this._lastRow = 0;
  },

  platforms: function() {
    var lastColumn = 0;
    for (var i=0; i<arguments.length; i++) {
      var argument = arguments[i];
      if (argument == 0) {
        lastColumn++;
      }
      else {
        this._basicPlatform().attr({x: lastColumn*32, y: this._lastRow*24, w: argument*32, h: 12});
        lastColumn = lastColumn + argument;
      }
    }

    this._lastRow++;
    return this;
  },

  removePlatforms: function() {
    this._lastRow = 0;

    Crafty('Platform').each(function(i) {
      this.destroy();
    });
  },

  _basicPlatform: function() {
    var platform = Crafty.e('2D, Canvas, Color, Collision, Platform')
                    .color('#8B7355');

    return platform;
  }
});
