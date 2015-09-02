'use strict'

define([
    'underscore',
    'backbone', 
    'text!templates/contestant.html',
    'model/contestant'
    ], function (_, Backbone, ContestantTemplate, Contestant) {

        var contestantView = Backbone.View.extend({
            el: '#app', 
            template: _.template(ContestantTemplate),

            initialize: function(id) {
                var contestant = new Contestant();
                contestant.fetch({url: "http://localhost:8080/rest/contestants/"+id});
                console.log(contestant);
            }, 

            render: function() {
                // the disciplines will be "visible" in your template
                this.$el.html(this.template({contestant: this.coll.toJSON()}));
                return this;
            },


        });

        return contestantView;


    });