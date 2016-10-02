Crafty.c('Hurtable', {
  init: function() {
    this.requires('Delay');
    this.lives = 3;

    this._hasLanded = false;
  },

  hurt: function(fromDirection) {
    if (this.hurted) {
      return;
    }
    this.hurted = true;
    this._hasLanded = false;

    this.lives--;

    this.vx += (fromDirection == 'e' ? 100 : -100);
    this.vy -= 200;

    this.delay(function() {
      if (!this._hasLanded && this.ground) {
        this._hasLanded = true;
        this.vx += (fromDirection == 'e' ? -100 : 100);
      }

      this.visible = false;

      this.timeout(function() {
        this.visible = true;
      }, 55);
    }, 55, 40, function() {
      this.visible = true;
      this.hurted = false;
    });
  }
});
