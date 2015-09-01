'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'views/disciplinesView',
    'views/contestantsView',
    'views/navigationView'
], function (jquery, _, Backbone, DisciplineView, ContestantsView, NavigationView) {

    var Router = Backbone.Router.extend({

        routes: {
            '': 'disciplinesView',
            'contestants': 'contestantsView'
        },

        initialize: function () {
            var navigationView = new NavigationView();
            navigationView.render();
        },

        disciplinesView: function () {
            var disciplineView = new DisciplineView();
            return disciplineView;
        },

        contestantsView: function () {
            var contestantsView = new ContestantsView();
            return contestantsView;
        }
    });


    return Router;

});