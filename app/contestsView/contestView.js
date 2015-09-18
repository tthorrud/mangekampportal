'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'text!contestsView/templates/contestTemplate.html',
    'contestsView/models/contest'
], function (jquery, _, Backbone, ContestTemplate, Contest) {

    var ContestView = Backbone.View.extend({
        el: '#app',
        template: _.template(ContestTemplate),
        initialize: function (id) {
            var self = this;
            this.contest = new Contest({id:id});
            this.contest.fetch({
                success: function () {
                    self.render();
                },
                error: function () {
                    console.log("Error");
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
            };

            this.$el.html(this.template({contest: this.contest.toJSON()['contest'], participants: this.contest.toJSON()['participants']   , getDate: getDate, getTime: getTime, getCategory: getCategory, getDivision: getDivision}));
            return this;
        }
    });

    return ContestView;

});