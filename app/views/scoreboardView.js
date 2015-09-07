/**
 * Created by jane on 2015-09-07.
 */
'use strict';

define([
    'underscore',
    'backbone',
    'text!templates/scoreboard.html',
    'model/scoreboard'
], function (_, Backbone, ScoreboardTemplate, Scoreboard) {

    var ScoreboardView = Backbone.View.extend({
        el: '#app',
        template: _.template(ScoreboardTemplate),

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