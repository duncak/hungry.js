Crafty.c('Egg', {
  init: function() {
    this._startY = NaN;

    this.requires('2D, Canvas, Color, Twoway, Collision, Gravity, Floored')
    .color('#CC0C2C')
    .gravity('Platform')
    .attr(w: 12, h: 12)
    .bind('Moved', function(from) {
      if (isNaN(parseFloat(this._startY))) {
        this._startY = this.y;
      }

      if (this.ground && this.y - this._startY > 5)) {
        this._startY = this.y;

        var options = {
          maxParticles: 4,
          size: 3,
          sizeRandom: 1,
          speed: 1,
          speedRandom: 1.2,
          // Lifespan in frames
          lifeSpan: 1000,
          lifeSpanRandom: 7,
          // Angle is calculated clockwise: 12pm is 0deg, 3pm is 90deg etc.
          angle: 65,
          angleRandom: 34,
          startColour: [204, 12, 44, 1],
          startColourRandom: [204, 12, 44, 1],
          endColour: [204, 12, 44, 1],
          endColourRandom: [204, 12, 44, 1],
          // Only applies when fastMode is off, specifies how sharp the gradients are drawn
          sharpness: 20,
          sharpnessRandom: 10,
          // Random spread from origin
          spread: 10,
          // How many frames should this last
          duration: -1,
          // Will draw squares instead of circle gradients
          fastMode: false,
          gravity: { x: 0, y: 0.1 },
          // sensible values are 0-3
          jitter: 0,
          // Offset for the origin of the particles
          originOffset: {x: 0, y: 0}
        };

        Crafty.e("2D,Canvas,Particles").particles(options);
      }
    });

    this.alpha = 0.5;
    this.timeout(function() {
      this.alpha = 1;
      this.addComponent('Droppable');
      this.dropType = 'Egg';
    }, 1000);
  }
});
