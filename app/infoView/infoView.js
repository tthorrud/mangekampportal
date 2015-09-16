'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'infoView/models/info',
    'text!infoView/templates/infoTemplate.html',
], function (jquery, _, Backbone, Info, InfoTemplate) {


    var MainView = Backbone.View.extend({
        model: Info,
        el: '#app',
        template: _.template(InfoTemplate),


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
        }

    });

    return MainView;

});