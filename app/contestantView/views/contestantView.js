'use strict';

define([
    'underscore',
    'backbone', 
    'text!contestantView/templates/contestant.html',
    'contestantView/models/contestant'
    ], function (_, Backbone, ContestantTemplate, Contestant) {

        var contestantView = Backbone.View.extend({
            el: '#app', 
            template: _.template(ContestantTemplate),

            initialize: function(id) {
                var self = this;
                this.contestant = new Contestant({id:id});
                this.contestant.fetch(
                    {success: function () {
                        self.render();
                    },
                    error:function (){
                        console.log('Error');
                    }});
            },

            render: function() {
                var contestant_results = [];

                for(var key in this.contestant.attributes) {
                    contestant_results[key] = this.contestant.attributes[key];
                }

                this.$el.html(this.template({contestant: contestant_results}));
                return this;
            }


        });

        return contestantView;


    });