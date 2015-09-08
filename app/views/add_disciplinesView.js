'use strict';


define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/add_discipline.html',
    'bootstrap',
    'model/discipline',
    'collections/disciplines'
], function (jquery, _, Backbone, AddDisciplineTemplate, bootstrap, Discipline, Disciplines){

    var AddDisciplineView = Backbone.View.extend({

        el: '#app',
        template:  _.template(AddDisciplineTemplate),
        model: Discipline,
        disciplines: Disciplines,


        events: {
            "click #submit": "addDiscipline",
            'change input[type=radio]': 'onSelectedPictogram'
        },

        initialize: function() {
            var self = this;

            this.disciplines = new Disciplines();
            this.disciplines.fetch({
                success: function () {
                    self.render();
                },
                error: function (error) {
                    console.log(error);
                }
            });
        },

        render: function () {
            this.$el.html(this.template({disciplines: this.disciplines.toJSON()}));
            return this;
        },

        addDiscipline: function () {
            var discipline = new Discipline({
                "name":jquery('#discipline_name').val(),
                "description":jquery('#discipline_description').val(),
                "category":jquery('#discipline_category').val(),
                "resultFormat":jquery('#discipline_resultFormat').val(),
                "pictogram": this.selectedPictogram
            });

            discipline.save({
                success: function(response){
                    console.log(response);
                },
                error: function(response){
                    console.log(response);
                }});
        },

         onSelectedPictogram: function(){
            this.selectedPictogram = jquery('input[type=radio]:checked').val();
         }
    });

    return AddDisciplineView;

});
