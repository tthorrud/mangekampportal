'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'views/disciplinesView',
    'views/contestantsView',
    'views/navigationView',
    'mainView/mainView',
    'contestsView/contestsView',
    'contestsView/contestView',
    'scoreboardView/scoreboardView',
    'views/contestantView',
    'views/add_disciplinesView'
], function (jquery, _, Backbone, DisciplineView, ContestantsView, NavigationView, MainView, ScoreboardView, ContestsView, ContestView, ContestantView, AddDisciplineView) {


    var Router = Backbone.Router.extend({

        routes: {
            '': 'mainView',
            'home': 'mainView',
            'contestants': 'contestantsView',
            'scoreboard': 'scoreboardView',
            'contests': 'contestsView',
            'contests/:id': 'contestView',
            'contestant/:id': 'contestantView',
            'disciplines':'disciplinesView',
            'disciplines/add': 'addDisciplineView'
        },

        initialize: function () {

            var navigationView = new NavigationView();
            navigationView.render();
        },

        disciplinesView: function () {
            var disciplineView = new DisciplineView();
            return disciplineView;
        },
        addDisciplineView: function () {
            var addDisciplineView = new AddDisciplineView();
            return addDisciplineView;
        },
        contestantsView: function () {
            var contestantsView = new ContestantsView();
            return contestantsView;

        },
        mainView: function () {
            var mainView = new MainView();
            return mainView;

        },
        contestantView: function (id) {
            var contestantView = new ContestantView(id);
            return contestantView;
        },
        scoreboardView: function () {
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