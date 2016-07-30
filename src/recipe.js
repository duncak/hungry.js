Crafty.c('Recipe', {
  init: function() {
  },

  plan: function(item, quantity) {
    var isPlannedAlready = false;
    Crafty('Planned').each(function(i) {
      if (this.dropType == item.dropType) {
        this.plannedStackValue++;
        isPlannedAlready = true;
      }
    });

    if (isPlannedAlready) {
      item.destroy();
    } else {
      if (item.has('Collision')) {
        item.removeComponent('Collision');
      }
      if (item.has('Gravity')) {
        item.removeComponent('Gravity');
      }
      if (!item.has('Planned')) {
        item.addComponent('Planned');
      }

      this._redrawItems();
    }
  },

  _redrawItems: function() {
    var lastAvailableX = 6;
    Crafty('Planned').each(function(i) {
      this.x = lastAvailableX;
      this.y = 6;
      lastAvailableX += this.w+16;
    });
  }
});
