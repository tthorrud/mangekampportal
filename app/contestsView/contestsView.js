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
            "change .button-contests-division input[type=radio]": "filterContests",
            "change .button-contests-year input[type=radio]": "filterContests",
            "change .button-contests-category input[type=radio]": "filterContests",
        },
        filterContests: function (ev) {

            var chosenyear = this.$("div.button-contests-year .active input")[0]['id'];
            var division = this.$("div.button-contests-division .active input")[0]['id'];
            var category = this.$("div.button-contests-category .active input")[0]['id'];

            this.resultView.filterContests(chosenyear, division, category);
            
        },
        initialize: function () {
            var self = this;
            this.render();

        },
        render: function () {

            this.$el.html(this.template);

            // Two subviews. FilterView is holding the filter paramenters from the user. ResultsView is showing the filtered collection. 
            this.filterView = new FilterView();
            this.resultView = new ResultView();

            return this;
        }
    });

    return ContestsView;

});