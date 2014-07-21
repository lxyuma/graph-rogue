$(document.body).ready(function(){
  var level = 20;

  var stage = new Rogue.Stage(level);
  var s = new sigma({
    container: document.getElementById("rogue-main"),
    type: "canvas"
  });
  s.graph.read(stage.routes[0].attributes());

  //var nodesData = [
  //  {id: "n0", label: "A", x: 0, y: 0, size: 3},
  //  {id: "n1", label: "B", x: 1, y: 0, size: 2},
  //  {id: "n2", label: "C", x: 1, y: 1, size: 1}
  //];
  //var edgesData = [
  //  {id: "e0", source: "n0", target: "n1"},
  //  {id: "e1", source: "n0", target: "n2"},
  //  {id: "e2", source: "n1", target: "n2"}
  //];
  //s.graph.read({
  //  nodes: nodesData,
  //  edges: edgesData
  //});
});
