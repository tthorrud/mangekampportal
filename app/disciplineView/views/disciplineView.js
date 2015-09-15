'use strict';


define([
    'jquery',
    'underscore',
    'backbone',
    'text!disciplineView/templates/discipline.html',
    'bootstrap',
    'disciplineView/models/discipline',
    'collections/categories',
    'collections/resultformats'
], function ($, _, Backbone, DisciplineTemplate, bootstrap, Discipline, FormatCategories, FormatResultformats){

    var DisciplineView = Backbone.View.extend({

        el:'#app',
        model:Discipline,
        template: _.template(DisciplineTemplate),

        events: {
            'click #delete_discipline': 'deleteDiscipline'
        },

        initialize: function (disciplineId) {

            var self = this;

            this.formatCategory = new FormatCategories();
            this.formatResultFormat = new FormatResultformats();

            this.model = new Discipline({id:disciplineId});
            this.model.fetch({
                success: function () {
                    self.render();
                },
                error: function (error) {
                    console.log(error);
                }
            });

        },

        render: function () {

            this.$el.html(this.template({
                discipline: this.model.toJSON(),
                formatCategory: this.formatCategory,
                formatResultFormat: this.formatResultFormat}));
            return this;

        },

        deleteDiscipline: function () {
            this.model.destroy({
                success: function () {
                    Backbone.history.navigate('disciplines',{trigger: true});
                },
                error: function (error) {
                    console.log(error);
                }
            });
        }
    });

    return DisciplineView;
});