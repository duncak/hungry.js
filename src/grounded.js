Crafty.c('Grounded', {
  init: function() {
    this.bind('EnterFrame', function () {
      var platform = this.ground;
      if (platform) {
        if (this.x < platform.x) {
          this.x = platform.x;
          this.dX *= -1;
        }
        else if (this.x+this.w > platform.x+platform.w) {
          this.x = platform.x+platform.w-this.w;
          this.dX *= -1;
        }
      }
    })
  }
});
