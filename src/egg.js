Crafty.c('Egg', {
  init: function() {
    this._startY = NaN;

    this.requires('2D, Canvas, Color, Collision, Gravity, Floored')
    .color('#C1E4E8')
    .gravity('Platform')
    .attr({w: 12, h: 12})
    .bind('EnterFrame', function() {
      if (isNaN(parseFloat(this._startY))) {
        this._startY = this.y;
      }

      if (this.ground && this.y - this._startY > 50) {
        this._startY = this.y;
        this.break();
        this.destroy();
      }
    });

    this.alpha = 0.5;
    this.timeout(function() {
      this.alpha = 1;
      this.addComponent('Droppable');
      this.dropType = 'Egg';
    }, 1000);
  },

  break: function() {
    var leftEggshell = Crafty.e('Eggshell').attr({x: this.x-3, y:this.y+this.h/2-3});
    var rightEggshell = Crafty.e('Eggshell').attr({x: this.x+this.w+3, y:this.y+this.h/2-3});
  }
});

Crafty.c('Eggshell', {
  init: function() {
    this.requires('2D, Canvas, Color, Collision, Gravity, Floored')
    .color('#C1E4E8')
    .gravity('Platform')
    .attr({w: 3, h: 3})
    .bind('EnterFrame', function () {
      var platform = this.ground;
      if (platform ) {
        var dY = this.motionDelta().y * 2;
        if (dY > 1) {
          this.y -= dY;
        }
      }
    });

    this.timeout(function() {
      this.destroy();
    }, 4000);
  }
})
