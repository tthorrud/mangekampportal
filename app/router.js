'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'views/disciplinesView',
    'views/contestantsView',
    'views/navigationView',
    'views/contestantView',
    'views/add_disciplinesView'
], function (jquery, _, Backbone, DisciplineView, ContestantsView, NavigationView, ContestantView, AddDisciplineView) {

    var Router = Backbone.Router.extend({

        routes: {
            '': 'disciplinesView',
            'contestants': 'contestantsView',
            'contestant/:id': 'contestantView',
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
        contestantView: function (id) {
            var contestantView = new ContestantView(id);
            return contestantView;
        }
    });


    return Router;

});