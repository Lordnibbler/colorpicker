var app = app || {};

$(function() {
  // start our backbone app
  window.dapp = new app.SwatchAppView();
  Backbone.history.start();

  // bind to the jquery-ui-touch-punch resizable elements
  // $('ul#colors li').resizable({
  //   handles: 'e',
  //   grid: 25
  // });

  // $('ul#colors li').resizable({
  //   handles: 'e',
  //   grid: 25,
  //   resize: function(event, ui){
  //     console.log($(this).width());
  //     $(this).next().css("width","-"+$(this).width()+"px");
  //   }
  // });

  $("#colors li").resizable({
    alsoResizeReverse: $("li#edit")
  });

// $('#colors li').resizable({
//   handles: 'e',

//   resize: function(){
//     $('#colors li')..css("height", "-" + $(this).size.height + "px");
//   }
// })

});
