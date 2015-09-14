'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'disciplineView/models/discipline',
    'bootstrap',
    'text!disciplineView/templates/edit_discipline.html',
    'collections/pictograms',
    'collections/categories',
    'collections/resultformats'
], function ($, _, Backbone, Discipline, bootstrap, EditDisciplineTemplate, Pictograms, Categories, Resultformats) {

    var EditDisciplineView = Backbone.View.extend({

       el:'#app',
       model: Discipline,
       template: _.template(EditDisciplineTemplate),

       events: {
           'click #saveDiscipline': 'saveDiscipline',
           'change input[type=radio]': 'onSelectedPictogram'
       },

       initialize: function (disciplineId) {
           var self = this;

           this.pictograms = new Pictograms();
           this.pictograms.fetch({
               success:function() {
               },
               error: function (error) {
                   console.log(error);
               }
           });

           this.categories = new Categories();
           this.categories.fetch({
               success:function() {
               },
               error: function (error) {
                   console.log(error);
               }
           });

           this.resultformats = new Resultformats();
           this.resultformats.fetch({
               success:function() {
               },
               error: function (error) {
                   console.log(error);
               }
           });

           this.model = new Discipline({id:disciplineId});
           this.model.fetch({
               success:function() {
                   self.render();
               },
               error: function (error) {
                   console.log(error);
               }
           });
       },

       render: function () {

           var pictograms = this.pictograms.toJSON();
           var categories = this.categories.toJSON();
           var resultformats = this.resultformats.toJSON();

           this.$el.html(this.template({
               discipline: this.model.toJSON(),
               pictograms: Object.keys(pictograms[0]),
               categories: Object.keys(categories[0]),
               resultformats: Object.keys(resultformats[0]),
               formatResult: this.resultformats,
               formatCategory: this.categories}));
       },


       saveDiscipline: function () {
           this.model = new Discipline({
               "id": this.model.id,
               "name":$('#discipline_name').val(),
               "description":$('#discipline_description').val(),
               "category":$('#discipline_category').val(),
               "resultFormat":$('#discipline_resultFormat').val(),
               "pictogram": this.selectedPictogram
           });

           this.model.save({},{
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

    return EditDisciplineView;

});