var app = app || {};

$(function() {
  "use strict";

  app.Color = Backbone.Model.extend({
    defaults: {
      h: 0,
      s: 0,
      l: 0
    },

    /**
     * Returns a manipulable color object
     */
    getColor: function() {
      return Color({
        h: this.get("h"),
        s: this.get("s"),
        l: this.get("l")
      });
    },

    hslCss: function() {
      return this.getColor().hslString();
    },

    hexCss: function() {
      return this.getColor().hexString();
    },

    rgb: function() {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(this.hexCss());
      return result ? {
          r: String("000" + parseInt(result[1], 16)).slice(-3),
          g: String("000" + parseInt(result[2], 16)).slice(-3),
          b: String("000" + parseInt(result[3], 16)).slice(-3),
          a: "000"
      } : null;
    }
  });

});
