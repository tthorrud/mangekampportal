'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'text!contestsView/templates/result.html',
    'contestsView/collections/contests',
    'contestsView/models/contest',
], function (jquery, _, Backbone, ResultTemplate, Contests, Model) {

    var ResultView = Backbone.View.extend({
        el: '#results',
        template: _.template(ResultTemplate),
        filterContests: function (year, division, category) {

            this.filteredContests.set(this.allContests.filter(function(contest) {

                var tempYear = ((year == 'ALL') || (contest.get('year') == year));
                var tempDivision = ((division === 'ALL') || (contest.get('division') === division));
                var tempCategory = ((category == 'ALL') || (contest.get('discipline').category === category));

                return (tempYear && tempDivision && tempCategory);
            }));

            this.render();
        },
        initialize: function () {
            var self = this;

            // Collection to track all contests
            this.allContests = new Contests();

            // Displayed collection which may be filtered
            this.filteredContests = new Contests();

            this.allContests.fetch({
                success: function () {
                    self.filteredContests = self.allContests.clone();
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

            this.$el.html(this.template({contests: this.filteredContests.toJSON(), getDate: getDate, getTime: getTime, getCategory: getCategory, getDivision: getDivision}));
            return this;
        }
    });

    return ResultView;

});