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
        events: {
            "click .button-all": "getAllContests",
            "click .button-filter": "getContestsByDivision",
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
        getAllContests: function() {
             this.filteredContests = this.allContests.clone();
             this.render();
        },
        getContestsByDivision: function(ev) {
              var chosenDivision = $(ev.currentTarget).data('division');
              this.filteredContests.set(this.allContests.where({division: chosenDivision}));
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

            this.$el.html(this.template({contests: this.filteredContests.toJSON(), getDate: getDate, getTime: getTime, getCategory: getCategory, getDivision: getDivision}));
            return this;
        }
    });

    return ContestsView;

});