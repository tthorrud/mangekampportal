/**
 * Created by thorstein on 07.09.15.
 */
'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'text!mainView/templates/nextContestTemplate.html',
    'mainView/models/nextContestModel'
], function (jquery, _, Backbone, NextContestTemplate, Model) {

    var NextContestView = Backbone.View.extend({
        model: Model,
        el: '#nextContest',
        template: _.template(NextContestTemplate),

        events: {
            'click #signup': 'newSignup',
            'click #signoff': 'newSignOff'
        },

        initialize: function(){
            var self = this;
            this.model = new Model();
            this.feedback = '';
            this.model.fetch({
                success: function(){
                    self.render();
                },
                error: function(){
                    console.log("HER SKJEDDE DET NOE RART")
                }
            });
        },

        newSignup:function(){
            console.log("SIGNUP");
            var postModel = new Model();
            postModel.save();
            this.feedback = "Du er påmeldt";
            this.render();
        },

        newSignOff: function(){
            console.log("SIGNOFF");
            var postModel = new Model({
                id: 169
            });
            postModel.destroy({
                contentType: "application/json"

            });
            this.feedback = "Du er ikke påmeldt";
            this.render();

        },

        render: function () {
            this.$el.html(this.template({nextContest: this.model.toJSON(), feedback: this.feedback}));
            return this;
        }

    });

    return NextContestView;

});