var app = app || {};

$(function() {
  // start backbone app
  window.dapp = new app.SwatchAppView();
  Backbone.history.start();

  // start socket.io
  var socket = io.connect("http://localhost:1337");
  window.dapp.socket = socket;
});
