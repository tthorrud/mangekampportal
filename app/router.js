'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'views/disciplinesView',
    'views/contestantsView',
    'views/navigationView',
    'views/contestantView'
], function (jquery, _, Backbone, DisciplineView, ContestantsView, NavigationView, ContestantView) {

    var Router = Backbone.Router.extend({

        routes: {
            '': 'disciplinesView',
            'contestants': 'contestantsView',
            'contestant/:id': 'contestantView'
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
        contestantView: function (id) {
            var contestantView = new ContestantView(id);
            return contestantView;
        }
    });


    return Router;

});