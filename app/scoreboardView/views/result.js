'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'text!scoreboardView/templates/scoreboardTemplate.html',
    'scoreboardView/models/scoreboard'
], function ($, _, Backbone, ScoreboardTemplate, Scoreboard) {

    var ScoreboardView = Backbone.View.extend({
        el: '#results',
        model: Scoreboard,
        template: _.template(ScoreboardTemplate),
        filterScoreboard: function (year, division) {

            //???
            this.filteredScoreboard.set(this.scoreboard.filter(function(scoreboard) {

                var tempYear = ((scoreboard.get('year') == year));
                var tempDivision = ((scoreboard.get('division') === division));

                return (tempYear && tempDivision);
            }));

            this.render();
        },

        initialize: function() {
            var self = this;
            this.scoreboard = new Scoreboard();
            this.scoreboard.fetch({
                success: function () {
                    self.render();
                },
                error: function () {
                    console.log("D");
                }
            });
        },


        render: function() {

            this.$el.html(this.template({scoreboard: this.scoreboard.toJSON()}));
            return this;
        }

    });

    return ScoreboardView;

});