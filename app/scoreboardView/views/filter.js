'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'text!scoreboardView/templates/filter.html',
], function (jquery, _, Backbone, FilterTemplate) {


    var FilterView = Backbone.View.extend({
        el: '#filters',
        template: _.template(FilterTemplate),


        initialize: function(){
            this.render();
        },



        render: function () {
            this.$el.html(this.template());
            return this;
        }

    });

    return FilterView;

});