'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'text!scoreboardView/templates/result.html',
    'scoreboardView/models/scoreboard'
], function ($, _, Backbone, ScoreboardTemplate, Scoreboard) {

    var ScoreboardView = Backbone.View.extend({
        el: '#results',
        model: Scoreboard,
        template: _.template(ScoreboardTemplate),
        filterScoreboard: function (year, division) {

            var self = this;
            this.scoreboard.fetch({
                url: "http://localhost:8080/rest/score/"+ year + "/" + division,
                success: function () {
                    console.log("Success");
                    self.render();
                },
                error: function () {
                    console.log("D");
                }
            });

        },

        initialize: function() {
            var self = this;
            this.scoreboard = new Scoreboard();
            this.scoreboard.fetch({
                url: "http://localhost:8080/rest/score/2015/MEN",
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