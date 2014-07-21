var Rogue = Rogue || {};

;(function(){

  Rogue.Node = function(x, y, label, id){
    this.x = x;
    this.y = y;
    this.label = label;
    this.id = typeof(id) === "string" ? id : Rogue.Node.generateId();
  };

  Rogue.Node.generateId = function(){
    return Math.random().toString(36).slice(-16);
  };

  Rogue.Node.prototype.attributes = function(){
    return {
      id: this.id,
      x: this.x,
      y: this.y,
      size: 1,
      label: this.label
    }
  };
})();
