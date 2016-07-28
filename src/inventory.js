Crafty.c('Inventory', {
  init: function() {
  },

  carry: function(item) {
    var isStoredAlready = false;
    Crafty('Stored').each(function(i) {
      if (this.dropType == item.dropType) {
        this.storedStackValue++;
        isStoredAlready = true;
      }
    });

    if (isStoredAlready) {
      item.destroy();
    } else {
      if (item.has('Collision')) {
        item.removeComponent('Collision');
      }
      if (item.has('Gravity')) {
        item.removeComponent('Gravity');
      }
      if (!item.has('Stored')) {
        item.addComponent('Stored');
      }

      this._redrawItems();
    }
  },

  _redrawItems: function() {
    var lastAvailableX = 6;
    Crafty('Stored').each(function(i) {
      this.x = lastAvailableX;
      this.y = 6;
      lastAvailableX += this.w+16;
    });
  }
});
