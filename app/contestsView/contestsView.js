'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'text!contestsView/templates/contestsTemplate.html',
    'contestsView/collections/contests',
    'contestsView/views/filter',
    'contestsView/views/result'
], function (jquery, _, Backbone, ContestsTemplate, Contests, FilterView, ResultView) {


    var ContestsView = Backbone.View.extend({
        el: '#app',
        template: _.template(ContestsTemplate),
        events: {
            "change .button-division input[type=radio]": "filterContests",
            "change .button-year input[type=radio]": "filterContests",
            "change .button-category input[type=radio]": "filterContests",
        },
        filterContests: function (ev) {

            var chosenyear = this.$("div.button-year .active input")[0]['id'];
            var division = this.$("div.button-division .active input")[0]['id'];
            var category = this.$("div.button-category .active input")[0]['id'];

            console.log("year: " + chosenyear);
            console.log("division: " + division);
            console.log("category: " + category);

            this.resultView.filterContests(chosenyear, division, category);
            
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

            // Two subviews. FilterView is holding the filter paramenters from the user. ResultsView is showing the filtered collection. 
            this.filterView = new FilterView();
            this.resultView = new ResultView();

            return this;
        }
    });

    return ContestsView;

});