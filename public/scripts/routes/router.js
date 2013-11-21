  var app = app || {};

$(function() {
  "use strict";

  var ColorRouter = Backbone.Router.extend({
    routes: {
      "*colors": "setColors"
    },

    initialize: function(ops) {
      app.Colors.on("add", this.pushColorState, this);
      app.Colors.on("remove", this.pushColorState, this);
    },

    setColors: function(param) {
      var colors = param.split(",");

      colors = _.reject(colors, function(color) {
        return color.length == 0;
      });

      app.Colors.reset();

      _.each(colors, function(color) {
        app.Colors.addFromHex("#" + color);
      });
    },

    /**
     * Pushes the current Colors state to the path
     */
    pushColorState: function() {
      var hash = app.Colors.reduce(function(memo, color) {
        return memo + color.hexCss().substr(1) + ',';
      }, "");

      // update redis & API
      this.pushColorStateToApi();

      // append to URL
      this.navigate(hash, {trigger: false, replace: true});
    },

    pushColorStateToApi: function() {
      $.ajax({
        url: "/api/redis_set_colors",
        type: "post",
        data: {
          colors: this.colorsToRgbString()
        },
        success: function(data, textStatus, jqXHR) {

        },
        error: function(jqXHR, textStatus, errorThrown) {

        }
      });
    },

    colorsToRgbString: function() {
      var rgbColors = "";
      app.Colors.each(function(color){
        rgbColors += color.rgb().r + color.rgb().g + color.rgb().b;
      });
      return rgbColors;
    }
  });

  app.Router = new ColorRouter();
});
