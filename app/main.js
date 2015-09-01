'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ]
        },
        exports: 'Backbone'
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        underscore: '../bower_components/underscore/underscore',
        backbone: '../bower_components/backbone/backbone',
        text: '../bower_components/requirejs-text/text'
    }
});


require([
    'backbone',
    'app',
    'router'
], function (Backbone, AppView, Router) {

    new Router();
    Backbone.history.start();

   new AppView();

});