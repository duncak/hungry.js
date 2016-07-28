Crafty.c('Floored', {

  init: function() {
    this.bind('EnterFrame', function () {
      var floor = Crafty('Floor');
      if (floor) {
        if (this.x < floor.x) {
          this.x = floor.x;
          this.dX *= -1;
        }
        else if (this.x+this.w > floor.x+floor.w) {
          this.x = floor.x+floor.w-this.w;
          this.dX *= -1;
        }
      }
    })
  }
});
