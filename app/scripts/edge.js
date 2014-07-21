var Rogue = Rogue || {};

;(function(){

  Rogue.Edge = function(sourceNode, targetNode, label, id){
    this.sourceNode = sourceNode;
    this.targetNode = targetNode;
    this.label = label;
    this.id = typeof(id) === "string" ? id : Rogue.Edge.generateId();
  };

  Rogue.Edge.generateId = function(){
    return Math.random().toString(36).slice(-16);
  };

  Rogue.Edge.prototype.attributes = function(){
    return {
      id: this.id,
      source: this.sourceNode.id,
      target: this.targetNode.id,
      label: this.label
    }
  };

})();
