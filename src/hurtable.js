Crafty.c('Hurtable', {
  init: function() {
    this.requires('Delay');
    this.lives = 3;
  },

  hurt: function(fromDirection) {
    if (this.hurted) {
      return;
    }
    this.hurted = true;

    this.lives--;

    this.vy -= 200;

    this.delay(function() {
      this.visible = false;

      this.delay(function() {
        this.visible = true;
      }, 55, 0)
    }, 55, 40, function() {
      this.visible = true;
      this.hurted = false;
    });
  }
});
