Crafty.c('Picker', {
  required: 'Inventory',

  init: function() {
    this.onHit('Droppable', function(entities) {
  		for (var i in entities) {
  			var drop = entities[i].obj;
        this.carry(drop);
      }
    });
  }
});
