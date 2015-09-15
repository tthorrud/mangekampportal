'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'bootstrap',
    'text!templates/resultformat_selector.html',
    'collections/resultformats'
], function ($, _, Backbone, bootstrap, ResultformatSelectorTemplate, Resultformats) {

    var ResultformatSelectorView = Backbone.View.extend({
        el:'#resultformat_selector_container',
        template: _.template(ResultformatSelectorTemplate),

        initialize: function () {
            var self = this;

            this.resultformats = new Resultformats();
            this.resultformats.fetch({
                success:function() {
                    self.render();
                },
                error: function (error) {
                    console.log(error);
                }
            });

        },

        render: function () {

            var resultformats = this.resultformats.toJSON();

            this.$el.html(this.template({
                resultformats: Object.keys(resultformats[0]),
                formatResult: this.resultformats}));
        }

    });

    return ResultformatSelectorView;

});