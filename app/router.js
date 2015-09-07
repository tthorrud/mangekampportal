'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'views/disciplinesView',
    'views/contestantsView',
    'views/navigationView',
    'views/contestantView',
    'views/scoreboardView'
], function (jquery, _, Backbone, DisciplineView, ContestantsView, NavigationView, ContestantView, ScoreboardView) {

    var Router = Backbone.Router.extend({

        routes: {
            '': 'disciplinesView',
            'contestants': 'contestantsView',
            'contestant/:id': 'contestantView',
            'scoreboard': 'scoreboardView'
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
        },
        scoreboardView: function() {
            var scoreboardView = new ScoreboardView();
            return scoreboardView;
        }

    });


    return Router;

});