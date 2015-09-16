
'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'text!contestantView/templates/contestants.html',
    'contestantView/collections/contestants'
], function (jquery, _, Backbone, ContestantsTemplate, Contestants) {


    var ContestantsView = Backbone.View.extend({
        el: '#app',
        template: _.template(ContestantsTemplate),

        initialize: function () {
            var self = this;
            this.coll = new Contestants();
            this.coll.fetch({
                success: function () {
                    self.render();
                },
                error: function () {
                    console.log("D");
                }
            });
        },

        render: function () {
            var newDate = function (date) {
                var tempDate = new Date(date);
                return ("0" + tempDate.getDate()).slice(-2) + '.' + ("0" + (tempDate.getMonth() + 1)).slice(-2) + '.' + tempDate.getFullYear();
            };

            this.$el.html(this.template({contestants: this.coll.toJSON(), formatDate: newDate}));
            return this;
        }
    });

    return ContestantsView;

});