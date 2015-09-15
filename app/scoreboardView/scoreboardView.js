/**
 * Created by jane on 2015-09-07.
 */
'use strict';

define([
    '../../bower_components/underscore/underscore',
    'backbone',
    'text!templates/scoreboard.html',
    'scoreboardView/models/scoreboard'
], function (_, Backbone, ScoreboardTemplate, Scoreboard) {

    var ScoreboardView = Backbone.View.extend({
        el: '#app',
        template: _.template(ScoreboardTemplate),
        events: {
            "click .button-filter": "getScoreboardByYear",
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

        getScoreboardByYear: function(ev) {
            var year = $(ev.currentTarget).data('year');
            console.log(year);
            var newScoreboard = new Scoreboard({year: year});
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


        render: function() {

            this.$el.html(this.template({scoreboard: this.scoreboard.toJSON()}));
            return this;
        }


    });

    return ScoreboardView;


});