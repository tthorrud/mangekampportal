'use strict';


define([
    'jquery',
    'underscore',
    'backbone',
    'text!disciplineView/templates/discipline.html',
    'bootstrap',
    'disciplineView/models/discipline'
], function ($, _, Backbone, DisciplineTemplate, bootstrap, Discipline){

    var DisciplineView = Backbone.View.extend({

        el:'#app',
        model:Discipline,
        template: _.template(DisciplineTemplate),

        events: {
            'click #delete_discipline': 'deleteDiscipline'
        },

        initialize: function (disciplineId) {
            var self = this;
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
            this.$el.html(this.template({discipline: this.model.toJSON(), formatCategory: this.formatCategory,
                formatResultFormat: this.formatResultFormat}));
            return this;
        },

        deleteDiscipline: function () {
            this.model.destroy({
                success: function (response) {
                    Backbone.history.navigate('disciplines',{trigger: true});
                },
                error: function (error) {
                    console.log(error);
                }
            });
        },

        formatResultFormat: function (resultFormat) {
            switch (resultFormat) {
                case 'INTEGER_INCREASING':
                    return 'Heltall (stigende)';
                case 'INTEGER_DECREASING':
                    return 'Heltall (synkende)';
                case 'DECIMAL_INCREASING':
                    return 'Desimaltall (stigende)';
                case 'DECIMAL_DECREASING':
                    return 'Desimaltall (synkende)';
                case 'TIME_INCREASING':
                    return 'Tid (stigende)';
                case 'TIME_DECREASING':
                    return 'Tid (synkende)';
            }
        },

        formatCategory: function (category) {
            switch (category){
                case 'BALL':
                    return 'Ball';
                case 'ENDURANCE':
                    return 'Kondisjon';
                case 'TECHNIQUE':
                    return 'Teknikk';
            }
        }

    });

    return DisciplineView;
});