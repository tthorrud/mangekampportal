'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'views/disciplinesView',
    'views/contestantsView',
    'views/navigationView',
    'views/contestsView'
], function (jquery, _, Backbone, DisciplineView, ContestantsView, NavigationView, ContestsView) {

    var Router = Backbone.Router.extend({

        routes: {
            '': 'disciplinesView',
            'contestants': 'contestantsView',
            'contests': 'contestsView'
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
        },
        contestsView: function () {
            var contestsView = new ContestsView();
            return contestsView;
        }
    });


    return Router;

});