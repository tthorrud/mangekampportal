'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'disciplineView/views/disciplinesView',
    'views/contestantsView',
    'views/navigationView',
    'mainView/mainView',
    'views/scoreboardView',
    'contestsView/contestsView',
    'contestsView/contestView',
    'views/contestantView',
    'disciplineView/views/add_disciplinesView',
    'disciplineView/views/edit_disciplineView',
    'disciplineView/views/disciplineView'
], function (jquery, _, Backbone, DisciplinesView, ContestantsView, NavigationView, MainView, ScoreboardView,
             ContestsView, ContestView, ContestantView, AddDisciplineView, EditDisciplineView, DisciplineView) {


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
            'disciplines/add': 'addDisciplineView',
            'disciplines/edit/:id': 'editDiscipline',
            'disciplines/:id':'disciplineView'
        },

        initialize: function () {

            var navigationView = new NavigationView();
            navigationView.render();
        },

        disciplinesView: function () {
            var disciplinesView = new DisciplinesView();
            return disciplinesView;
        },
        disciplineView: function (id) {
            var disciplineView = new DisciplineView(id);
            return disciplineView;
        },
        addDisciplineView: function () {
            var addDisciplineView = new AddDisciplineView();
            return addDisciplineView;
        },
        editDiscipline: function (disciplineId) {
            var editDisciplineView = new EditDisciplineView(disciplineId);
            return editDisciplineView;
        },
        contestantsView: function () {
            var contestantsView = new ContestantsView();
            return contestantsView;
        },
        mainView: function () {
            var mainView = new MainView();
            return mainView;
        },
        contestantView: function (contestantId) {
            var contestantView = new ContestantView(contestantId);
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