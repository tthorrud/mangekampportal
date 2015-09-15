'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'text!scoreboardView/templates/scoreboardTemplate.html',
    'scoreboardView/models/scoreboard',
    'scoreboardView/views/filter',
    'scoreboardView/views/result'
], function ($, _, Backbone, ScoreboardTemplate, Scoreboard, FilterView, ResultView) {

    var ScoreboardView = Backbone.View.extend({
        el: '#app',
        model: Scoreboard,
        template: _.template(ScoreboardTemplate),
        events: {
            "change .button-scoreboard-division input[type=radio]": "filterScoreboard",
            "change .button-scoreboard-year input[type=radio]": "filterScoreboard",
        },
        filterScoreboard: function (ev) {

            var chosenyear = this.$("div.button-scoreboard-year .active input")[0]['id'];
            var division = this.$("div.button-scoreboard-division .active input")[0]['id'];

            this.resultView.filterScoreboard(chosenyear, division);

        },
        initialize: function () {
            this.render();

        },

     /*   getScoreboardByYear: function(ev) {
            var year = $(ev.currentTarget).data('year');
            console.log(year);
            var newScoreboard = new Scoreboard({year: year, division});
            newScoreboard.fetch({
                success: function(){
                    console.log("Success")
                },
                error: function(){
                    console.log("FAIL")
                }
            });
            this.render();

        },
*/

        render: function () {

            this.$el.html(this.template);

            // Two subviews. FilterView is holding the filter paramenters from the user. ResultsView is showing the filtered collection.
            this.filterView = new FilterView();
            this.resultView = new ResultView();

            return this;
        }


    });

    return ScoreboardView;


});