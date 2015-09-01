/**
 * Created by jane on 2015-08-31.
 */
'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/disciplines.html',
    'collections/disciplines'
], function (jquery, _, Backbone, DisciplinesTemplate, Disciplines) {


    var DisciplineView = Backbone.View.extend({
        el: '#app',
        template: _.template(DisciplinesTemplate),

        initialize: function () {
            var self = this;
            this.coll = new Disciplines();
            this.coll.fetch({
                success: function () {
                    console.log(self.coll);
                    self.render();
                },
                error: function () {
                    console.log("D");
                }
            });
        },
        render: function () {
            // the disciplines will be "visible" in your template
            this.$el.html(this.template({disciplines: this.coll.toJSON()}));
            return this;
        }
    });

    return DisciplineView;

});