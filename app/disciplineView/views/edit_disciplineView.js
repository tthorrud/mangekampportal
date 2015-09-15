'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'bootstrap',
    'disciplineView/models/discipline',
    'text!disciplineView/templates/edit_discipline.html',
    'views/category_selectorView',
    'views/resultformat_selector',
    'views/pictogram_selector_view'
], function ($, _, Backbone, bootstrap, Discipline, EditDisciplineTemplate,
             CategorySelectorView, ResultformatSelectorView, PictogramSelectorView) {

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

           this.$el.html(this.template( {discipline: this.model.toJSON()} ) );

           this.category_selector_view = new CategorySelectorView();
           this.resultformat_selector_view = new ResultformatSelectorView();
           this.pictogram_selector_view = new PictogramSelectorView();
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