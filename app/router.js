'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'views/disciplinesView',
    'views/contestantsView',
    'views/navigationView',
    'views/contestsView',
    'views/contestView'
], function (jquery, _, Backbone, DisciplineView, ContestantsView, NavigationView, ContestsView, ContestView) {

    var Router = Backbone.Router.extend({

        routes: {
            '': 'disciplinesView',
            'contestants': 'contestantsView',
            'contests': 'contestsView',
            'contests/:id': 'contestView'
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
        },
        contestView: function (id) {
            var contestView = new ContestView(id);
            return contestView;
        }
    });


    return Router;

});