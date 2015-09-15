'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'bootstrap',
    'text!templates/category_selector.html',
    'collections/categories'
], function ($, _, Backbone, bootstrap, CategorySelectorTemplate, Categories) {

    var CategorySelectorView = Backbone.View.extend({
        el:'#category_selector_container',
        template: _.template(CategorySelectorTemplate),

        initialize: function () {
            var self = this;

            this.categories = new Categories();
            this.categories.fetch({
                success:function() {
                    self.render();
                },
                error: function (error) {
                    console.log(error);
                }
            });

        },

        render: function () {

            var categories = this.categories.toJSON();

            this.$el.html(this.template({
                categories: Object.keys(categories[0]),
                formatCategory: this.categories}));
        }

    });

    return CategorySelectorView;

});