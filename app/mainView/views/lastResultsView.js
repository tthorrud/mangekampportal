/**
 * Created by thorstein on 04.09.15.
 */
'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'text!mainView/templates/lastResultsTemplate.html',
    'mainView/models/lastResultsModel'
], function (jquery, _, Backbone, LastResultsTemplate, Model) {


    var MainView = Backbone.View.extend({
        model: Model,
        el: '#lastResults',
        template: _.template(LastResultsTemplate),


        initialize: function(){
            var self = this;
            this.model = new Model();
            this.model.fetch({
                success: function(){
                    self.render();
                },
                error: function(){
                    console.log("HER SKJEDDE DET NOE RART")
                }
            });
        },



        render: function () {
            var newDate = function (date) {
                var tempDate = new Date(date);
                return ("0" + tempDate.getDate()).slice(-2) + '.' + ("0" + (tempDate.getMonth() + 1)).slice(-2) + '.' + tempDate.getFullYear();
            };
            this.$el.html(this.template({lastResults: this.model.toJSON(), getDate: newDate}));

            return this;
        }

    });

    return MainView;

});