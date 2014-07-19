var Rogue = Rogue || {};

;(function(){
    Rogue.Driller = function(level){
        var width = level;
        var height = level;
        this.stage = new Stage(width, height);
        this.root = new Node(Rand(width), Rand(height));
        this.goal = new Node(Rand(width), Rand(height));
        this.cursor = this.root;
        this.nodes = [this.root, this.goal];
        this.edges = [];
    };

    Rogue.Driller.prototype.execute = function(){
        var nextNode = this.nextNode();
        while(nextNode != this.goal){
            this.createWay(nextNode);
        }
    };

    Rogue.Driller.prototype.nextNode = function(){

    };

    Rogue.Driller.prototype.createWay = function(){

    };

    Rogue.Driller.prototype.nodesToJSON = function(){

    };

    Rogue.Driller.prototype.edgesToJSON = function(){

    };
})();
