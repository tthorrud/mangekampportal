/**
 * Created by thorstein on 01.09.15.
 */
'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'mainView/views/lastResultsView',
    'mainView/views/nextContestView',
    'text!mainView/templates/mainViewTemplate.html',
    'mainView/models/nextContestModel'
], function (jquery, _, Backbone, LastResultsView, NextContestView, MainViewTemplate, Model) {


    var MainView = Backbone.View.extend({
        model: Model,
        el: '#app',
        template: _.template(MainViewTemplate),


        initialize: function(){
            this.render();
        },



        render: function () {
            this.$el.html(this.template());
            new LastResultsView();
            new NextContestView();


            return this;
        }

    });

    return MainView;

});