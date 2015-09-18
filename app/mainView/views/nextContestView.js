/**
 * Created by thorstein on 07.09.15.
 */
'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'text!mainView/templates/nextContestTemplate.html',
    'mainView/models/nextContestModel',
    'mainView/models/nextContestStatusModel'
], function (jquery, _, Backbone, NextContestTemplate, nextContestModel, StatusModel) {

    var NextContestView = Backbone.View.extend({
        model: nextContestModel,
        el: '#nextContest',
        template: _.template(NextContestTemplate),

        events: {
            'click #signup': 'newSignup',
            'click #signoff': 'newSignOff'
        },

        initialize: function(){
            var self = this;
            this.nextContestModel = new nextContestModel();
            this.statusModel = new StatusModel();

            this.statusModel.fetch({
                success: function (response) {
                    self.setStatus(response.attributes.status);
                    self.render();
                },
                error: function () {
                    console.log("noe rart skjedde her");
                }
            });

            this.nextContestModel.fetch({
                success: function(){
                    self.render();
                },
                error: function(){
                    console.log("HER SKJEDDE DET NOE RART")
                }
            });
        },

        setStatus: function(status){
              if (status === true) {
                  this.feedback = "Du er påmeldt"
              } else {
                  this.feedback = "Du er ikke påmeldt"
              }
        },

        newSignup:function(){
            var postModel = new nextContestModel();
            postModel.save();
            this.feedback = "Du er påmeldt";
            this.render();
        },

        newSignOff: function(){
            var postModel = new nextContestModel({
                id: 169
            });
            postModel.destroy({
                contentType: "application/json"

            });
            this.feedback = "Du er ikke påmeldt";
            this.render();

        },

        render: function () {
            this.$el.html(this.template({nextContest: this.nextContestModel.toJSON(), feedback: this.feedback}));
            return this;
        }

    });

    return NextContestView;

});