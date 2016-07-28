Crafty.c('Stunnable', {
  required: 'Delay',

  stun: function(blinkingRepeats, afterShockDuration, shocked) {
    if (this.stunned) {
      return;
    }

    if (shocked) {
      this.vy = -200;
    }
    this.stunned = true;

    this.delay(function() {
      this.visible = false;

      this.delay(function() {
        this.visible = true;
      }, 50, 0)
    }, 50, blinkingRepeats, function() {
      this.visible = true;

      this.alpha = 0.5;

      this.delay(function() {
        this.alpha = 1;
        this.stunned = false;
      }, afterShockDuration, 0)
    });
  }
});
