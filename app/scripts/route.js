var Rogue = Rogue || {};

;(function(){

  var DIRECTION = {
    VERTICAL: "vertical",    // tate
    HORIZONTAL: "horizontal" // yoko
  };

  var AVERAGE_INTERVAL = 1;

  Rogue.Route = function(xLimit, yLimit){
    this.xLimit = xLimit;
    this.yLimit = yLimit;

    this.direction = Rogue.Route.getRandDirection();

    var node = this.getRandRoot();
    this.cursorNode = node;

    this.nodes = [node];
    this.edges = [];

    this.generate();
  };

  Rogue.Route.getRandDirection = function(){
    return Math.floor(Math.random() * 2) === 1 ? DIRECTION.VERTICAL : DIRECTION.HORIZONTAL;
  };

  Rogue.Route.prototype.getRandRoot = function(){
    var x = 0;
    var y = 0;
    switch(this.direction){
      case DIRECTION.VERTICAL:
        x = Math.floor(Math.random() * this.xLimit);
        break;
      case DIRECTION.HORIZONTAL:
        y = Math.floor(Math.random() * this.yLimit);
        break;
    }
    return new Rogue.Node(x, y, "root");
  };

  Rogue.Route.prototype.generate = function(){
    //while(true){
    for(var i=0; i < 10000; i++){
      var nextNode = this.nextNode();
      if (this.xLimit <= nextNode.x ||
          this.yLimit <= nextNode.y){ break; }
      this.nodes.push(nextNode);
      this.edges.push(new Rogue.Edge(this.cursorNode, nextNode));
      this.cursorNode = nextNode;
    }
  };

  Rogue.Route.prototype.nextNode = function(){
    var x = this.cursorNode.x;
    var y = this.cursorNode.y;
    switch(this.direction){
      case DIRECTION.VERTICAL:
        y++;
        break;
      case DIRECTION.HORIZONTAL:
        x++;
        break;
    };
    return new Rogue.Node(x, y, "way");
  };

  Rogue.Route.prototype.attributes = function(){
    var nodeAttributes = [];
    for(var i = 0; i < this.nodes.length; i++){
      nodeAttributes.push(this.nodes[i].attributes());
    };
    var edgeAttributes = [];
    for(var i = 0; i< this.edges.length; i++){
      edgeAttributes.push(this.edges[i].attributes());
    };
    return {
      nodes: nodeAttributes,
      edges: edgeAttributes
    };
  };
})();
