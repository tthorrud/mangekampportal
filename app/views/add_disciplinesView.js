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
        collection: Disciplines,

        events: {
            "click #submit": "addDiscipline",
            "on input:change": "onPiktogramSelect"
        },

        initialize: function() {
            var self = this;
            this.collection = new Disciplines();
            this.collection.fetch({
                success: function () {
                    self.render();
                },
                error: function (error) {
                    console.log(error);
                }
            });
        },

        render: function () {

            console.log(this.collection.toJSON());
            this.$el.html(this.template({disciplines: this.collection.toJSON()}));
            return this;
        },

        addDiscipline: function () {
            var discipline = new Discipline({
                "name":jquery('#discipline_name').val(),
                "description":jquery('#discipline_description').val(),
                "category":jquery('#discipline_category').val(),
                "resultFormat":jquery('#discipline_resultFormat').val(),
                "pictogram":"BADMINTON"
            });

            discipline.save(discipline,{
                success: function(response){
                    console.log(response);
                },
                error: function(response){
                    console.log(response);
                }});
        },

        onPiktogramSelect: function(){
            var v = this.val();
            console.log(v);
        }
    });

    return AddDisciplineView;

});
