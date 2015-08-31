
    define([
        '../../bower_components/jquery/dist/jquery',
        'backbone',
        'collections/disciplines',
        'views/disciplines'
    ], function ($, Backbone, disciplinesCollection, disciplineView) {
        'use strict';

        var disciplinesRouter = Backbone.Router.extend({
            routes: {
            '(/)' : 'disciplines'
            },

            disciplines: function() {
                disciplineView = new disciplineView();
            }
        });




    return disciplinesRouter;

    });