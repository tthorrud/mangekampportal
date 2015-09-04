
'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/contests.html',
    'collections/contests'
], function (jquery, _, Backbone, ContestsTemplate, Contests) {


    var ContestsView = Backbone.View.extend({
        el: '#app',
        template: _.template(ContestsTemplate),

        initialize: function () {
            var self = this;
            this.coll = new Contests();
            this.coll.fetch({
                success: function () {
                    console.log(self.coll);
                    self.render();
                },
                error: function () {
                    console.log("D");
                }
            });
        },
        render: function () {
            var getDate = function (date) {
                var tempDate = new Date(date);
                return ("0" + tempDate.getDate()).slice(-2) + '.' + ("0" + (tempDate.getMonth() + 1)).slice(-2) + '.' + tempDate.getFullYear();
            };

            var getTime = function (date) {
                var tempDate = new Date(date);
                return ("0" + tempDate.getHours()).slice(-2) + ':' + ("0" + tempDate.getMinutes()).slice(-2);
            };

            var getCategory = function (category) {
                switch (category) {
                    case 'TECHNIQUE': return 'Teknikk';
                    case 'ENDURANCE': return 'Kondisjon';
                    case 'BALL': return 'Ball';
                    default: return category;
                }
            };

            var getDivision = function (division) {
                switch (division) {
                    case 'MEN': return 'Gutter';
                    case 'WOMEN': return 'Jenter';
                    case 'GENTLEMEN': return 'Menn';
                    default: return division;
                }
            }

            // the disciplines will be "visible" in your template
            this.$el.html(this.template({contests: this.coll.toJSON(), getDate: getDate, getTime: getTime, getCategory: getCategory, getDivision: getDivision}));
            return this;
        }
    });

    return ContestsView;

});