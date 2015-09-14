'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'text!contestsView/templates/contestsTemplate.html',
    'collections/contests',
    'contestsView/views/filters',
    'contestsView/views/contests'
], function (jquery, _, Backbone, ContestsTemplate, Contests, FilterView, ResultsView) {


    var ContestsView = Backbone.View.extend({
        el: '#app',
        template: _.template(ContestsTemplate),
        events: {
            "change .button-division2 input[type=radio]": "changeDivision",
            "change .button-year2 input[type=radio]": "changeDivision",
            "change .button-category input[type=radio]": "changeDivision",
        },
        changeDivision: function (ev) {
            console.log($(ev.currentTarget)[0]['id']);

            var chosenyear = this.$("div.button-year2 .active input")[0]['id'];
            var division = this.$("div.button-division2 .active input")[0]['id'];
            var category = this.$("div.button-category .active input")[0]['id'];

            console.log("year: " + chosenyear);
            console.log("division: " + division);
            console.log("category: " + category);

            this.resultView.changeDivision(chosenyear, division, category);
            
        },

        initialize: function () {
            var self = this;
            this.render();

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

            this.$el.html(this.template({getDate: getDate, getTime: getTime, getCategory: getCategory, getDivision: getDivision}));

            this.filterView = new FilterView();
            this.resultView = new ResultsView();

            return this;
        }
    });

    return ContestsView;

});