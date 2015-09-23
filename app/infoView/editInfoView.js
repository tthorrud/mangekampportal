'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'infoView/models/info',
    'text!infoView/templates/editInfoTemplate.html',
], function (jquery, _, Backbone, Info, EditInfoTemplate) {


    var MainView = Backbone.View.extend({
        model: Info,
        el: '#app',
        template: _.template(EditInfoTemplate),
        events: {
            'click #edit-info': 'updateInfo',
        },
        initialize: function(){
            var self = this;
            this.model = new Info();
            this.model.fetch({
                success: function() {
                    self.render();
                },
                error: function(){
                    console.log("HER SKJEDDE DET NOE RART")
                }
            });

            this.render();
        },

        render: function () {
            this.$el.html(this.template({info: this.model.toJSON()}));
            return this;
        },

        updateInfo: function () {
            this.model.set({info: $('textarea').val()});
            this.model.save({},{
               success: function (response) {
                   Backbone.history.navigate('info',{trigger: true});
               },
               error: function (error) {
                   console.log(error);
               }
           });
        }
    });

    return MainView;

});