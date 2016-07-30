Crafty.c('Planned', {
  init: function() {
    this._plannedStack = Crafty.e('2D, Canvas, Text');

    this.defineField("plannedStackValue", function() {
      return this._plannedStackValue;
    }, function(newValue) {
      this._plannedStackValue = newValue;

      this._plannedStack.x = this.x+this.w+2;
      this._plannedStack.y = this.y-this.h/2;
      if (newValue > 1) {
        this._plannedStack.text(''+newValue);
      } else {
        this._plannedStack.text('');
      }
    });
    this.plannedStackValue = 0;

    this.bind('EnterFrame', function() {
      this.alpha = 0.5;
    })
  }
});
