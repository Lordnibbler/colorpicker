var app = app || {};

$(function() {
  "use strict";

  app.ColorList = Backbone.Collection.extend({
    model: app.Color,

    removeLast: function() {
      // Remove and return the last model from the collection
      this.pop();
      console.log("newest color removed");
    },

    addFromHex: function(hex) {
      var c = Color(hex);
      this.add({
        h: c.hue(),
        s: c.saturation(),
        l: c.lightness()
      });
    }
  });

  // Global color collection
  app.Colors = new app.ColorList();
});
