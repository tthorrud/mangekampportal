'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'views/disciplinesView',
    'views/contestantsView',
    'views/navigationView',
    'mainView/mainView',
    'views/contestantView',
    'views/scoreboardView',
    'views/contestsView',
    'views/contestView'
], function (jquery, _, Backbone, DisciplineView, ContestantsView, NavigationView, MainView, ContestantView, ScoreboardView, ContestsView, ContestView) {

    var Router = Backbone.Router.extend({

        routes: {
            '': 'disciplinesView',
            'contestants': 'contestantsView',
            'mainView': 'mainView',
            'contestant/:id': 'contestantView',
            'scoreboard': 'scoreboardView',
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
        mainView: function() {
            var mainView = new MainView();
            return mainView;

        }, 
        contestantView: function (id) {
            var contestantView = new ContestantView(id);
            return contestantView;
        },
        scoreboardView: function() {
            var scoreboardView = new ScoreboardView();
            return scoreboardView;

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