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
    // this expects a string, not a jquery selector
    // might want to use resize method below to add a css class of "next" to $(this).next()
    // then pass alsoResizeReverse: ".next"
    // also need to remove css class of "next" when resize finishes
    // alsoResizeReverse: $("#edit"),
    // alsoResizeReverse: $(this).next(),
    alsoResize:$("#colors li").next(),
    handles: 'e',
    grid: 25,
    // resize: function(event, ui) {
      // console.log($(this).next()[0]);
      // $(this).next()[0].addClass("resizeMe");
      // var element_id = '#' + $(this).next();
      // console.log(element_id);
      // console.log($(this).next()[0])
    // },
    // alsoResizeReverse: $("li#edit"),
    // alsoResizeReverse: '.resizeMe',
  });

// $('#colors li').resizable({
//   handles: 'e',

//   resize: function(){
//     $('#colors li')..css("height", "-" + $(this).size.height + "px");
//   }
// })

});
