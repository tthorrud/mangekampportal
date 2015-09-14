'use strict';


define([
    'jquery',
    'underscore',
    'backbone',
    'text!disciplineView/templates/add_discipline.html',
    'bootstrap',
    'disciplineView/models/discipline',
    'collections/pictograms'
], function ($, _, Backbone, AddDisciplineTemplate, bootstrap, Discipline, Pictograms) {

    var AddDisciplineView = Backbone.View.extend({

        el: '#app',
        template:  _.template(AddDisciplineTemplate),
        model: Discipline,


        events: {
            'click #add_discipline': 'addDiscipline',
            'change input[type=radio]': 'onSelectedPictogram'
        },

        initialize: function () {
            var self = this;

            this.collection = new Pictograms();
            this.collection.fetch({
                success:function() {
                    self.render();
                },
                error: function (error) {
                    console.log(error);
                }
            });
        },

        render: function () {
            var pictograms = this.collection.toJSON();

            this.$el.html(this.template({pictograms: Object.keys(pictograms[0])}));
            return this;
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
