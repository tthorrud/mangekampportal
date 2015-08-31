/**
 * Created by jane on 2015-08-31.
 */

    define([
        '../../bower_components/jquery/dist/jquery',
        'underscore',
        'backbone',
        'text!templates/disciplines.html',
        'collections/disciplines'
    ], function (_, Backbone, disciplinesTemplate, disciplinesCollection) {
        'use strict';


    var disciplineView = Backbone.View.extend({
        el : '#mydiv',
        template : _.template(disciplinesTemplate),

        initialize : function() {
            var self = this;
            this.coll = new disciplinesCollection();
            this.coll.fetch({
                success: function() {
                    console.log(self.coll);
                    self.render();
                },
                error: function() {
                    console.log("D");
                }
            });
        },
        render : function() {
            // the disciplines will be "visible" in your template
            this.$el.html(this.template({ disciplines: this.coll.toJSON() }));
            return this;
        }
    });

    return disciplineView;

});