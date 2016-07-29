Crafty.c('Stored', {
  init: function() {
    this._storedStack = Crafty.e('2D, Canvas, Text');

    this.defineField("storedStackValue", function() {
      return this._storedStackValue;
    }, function(newValue) {
      this._storedStackValue = newValue;

      this._storedStack.x = this.x+this.w+2;
      this._storedStack.y = this.y+this.h/2;
      if (newValue > 1) {
        this._storedStack.text(''+newValue);
      } else {
        this._storedStack.text('');
      }
    });
    this.storedStackValue = 1;
  },

  store: function() {
    this.resetMotion();
    
    if (this.has('Collision')) {
      this.removeComponent('Collision');
    }
    if (this.has('Gravity')) {
      this.removeComponent('Gravity');
    }
  }
});
