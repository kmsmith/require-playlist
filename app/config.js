require.config({
  deps: ["main"],

  paths: {
    underscore: "../assets/underscore",
    backbone: "../assets/backbone",
    tpl: "../assets/tpl"
  },

  shim: {
    backbone: {
      deps: ["underscore"],
      exports: "Backbone"
    },

    underscore: {
      exports: "_"
    }
  }
});


