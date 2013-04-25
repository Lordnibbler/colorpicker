var app = app || {};
$(function() {
  // start our backbone app
  window.dapp = new app.SwatchAppView();
  Backbone.history.start();

  // bind to the jquery-ui-touch-punch resizable elements
  $('ul#colors li').resizable({
    handles: 'e',
    grid: 25
  });
});
