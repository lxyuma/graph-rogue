var Rogue = Rogue || {};

;(function(){
  Rogue.Stage = function(level){
    this.width = level;
    this.height = level;
    this.routes = this.createRoutes();
  };

  Rogue.Stage.prototype.createRoutes = function(){
    return [new Rogue.Route(this.width, this.height)];
  };
})();
