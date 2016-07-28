Crafty.c('Floor', {

  init: function() {
    this.requires('2D, Canvas, Color, Collision, Platform')
    .attr({x: 0, y: 480-12, w: 640, h: 12})
    .color('#8B7355');
  }
});
