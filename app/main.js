
//http://localhost:8080/rest/disciplines
'use strict';

    require.config({

        shim: {
            exports: '-'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },

    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        underscore: '../bower_components/underscore/underscore',
        backbone: '../bower_components/backbone/backbone',
        text: '../node_modules/requirejs-text/text'

    }

});



require([
    'backbone',
    'app',
    'routers/router'
], function (Backbone, AppView, Workspace) {

    new Workspace();
    Backbone.history.start();

    new AppView();

});