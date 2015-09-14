'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'text!contestsView/templates/results.html',
    'collections/contests',
    'contestsView/models/contest',
], function (jquery, _, Backbone, ResultTemplate, Contests, Model) {


    var ResultsView = Backbone.View.extend({
        el: '#results',
        template: _.template(ResultTemplate),
        changeDivision: function (year, division, category) {

            console.log("year: " + year);
            console.log("division: " + division);
            console.log("category: " + category);

            this.filteredContests.set(this.allContests.filter(function(contest) {
                return ((contest.get('discipline').category === category) && (contest.get('year') === +year) && (contest.get('division') === division));
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
        /*
        getContestsByYear: function(ev) {
            this.currentYear = $(ev.currentTarget).data('year');

            if (this.currentYear === 'ALL') {
                if (this.currentDivision === 'ALL') {
                    this.filteredContests = this.allContests.clone();
                } else {

                }

            }

            else this.filteredContests.set(this.allContests.where({year: this.currentYear}));

             this.render();
        },
        getContestsByDivision: function(ev) {
              this.currentDivision = $(ev.currentTarget).data('division');

              if (this.currentDivision === 'ALL') this.filteredContests = this.allContests.clone();
              else this.filteredContests.set(this.allContests.where({division: this.currentDivision}));

              this.render();
        },*/
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

    return ResultsView;

});