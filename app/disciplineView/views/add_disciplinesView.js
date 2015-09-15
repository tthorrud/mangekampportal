'use strict';


define([
    'jquery',
    'underscore',
    'backbone',
    'bootstrap',
    'text!disciplineView/templates/add_discipline.html',
    'disciplineView/models/discipline',
    'views/category_selectorView',
    'views/resultformat_selector',
    'views/pictogram_selector_view'
], function ($, _, Backbone, bootstrap, AddDisciplineTemplate, Discipline,
             CategorySelectorView, ResultformatSelectorView, PictogramSelectorView) {

    var AddDisciplineView = Backbone.View.extend({

        el: '#app',
        template:  _.template(AddDisciplineTemplate),
        model: Discipline,


        events: {
            'click #add_discipline': 'addDiscipline',
            'change input[type=radio]': 'onSelectedPictogram'
        },

        initialize: function () {
            this.render();
        },

        render: function () {

            this.$el.html(this.template());

            this.category_selector_view = new CategorySelectorView();
            this.resultformat_selector_view = new ResultformatSelectorView();
            this.pictogram_selector_view = new PictogramSelectorView();

        },

        addDiscipline: function () {
            var discipline = new Discipline({
                "name":$('#discipline_name').val(),
                "description":$('#discipline_description').val(),
                "category":$('#discipline_category').val(),
                "resultFormat":$('#discipline_resultFormat').val(),
                "pictogram": this.selectedPictogram
            });

            discipline.save({},{
                success: function (response) {
                    Backbone.history.navigate('disciplines',{trigger: true});
                },
                error: function (error) {
                    console.log(error);
                }
            });
        },

         onSelectedPictogram: function(){
            this.selectedPictogram = $('input[type=radio]:checked').val();
         }
    });

    return AddDisciplineView;

});
