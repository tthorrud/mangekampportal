'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'bootstrap',
    'text!templates/pictogram_selector.html',
    'collections/pictograms'
], function ($, _, Backbone, bootstrap, PictogramSelectorTemplate, Pictograms) {

    var PictogramSelectorView = Backbone.View.extend({
        el:'#pictogram_selector_container',
        template: _.template(PictogramSelectorTemplate),

        initialize: function () {
            var self = this;

            this.pictograms = new Pictograms();
            this.pictograms.fetch({
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
            this.$el.html( this.template( {pictograms: Object.keys(pictograms[0])} ) );

        }

    });

    return PictogramSelectorView;

});