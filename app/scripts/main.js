;(function($, sigma){
  $(document.body).ready(function(){
    sigma.parsers.json("test.json", {
      container: "rogue-main",
      settings: {
        defaultNodeColor: "yellow"
      }
    });
  });
})($, sigma);
