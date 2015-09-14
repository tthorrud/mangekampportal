'use strict';

define([
    'underscore',
    'backbone'
], function (_, Backbone) {

    var Contest = Backbone.Model.extend({
    	urlRoot: "http://localhost:8080/rest/contests/",

        defaults: {
            'id': ''
        },

        initialize: function (id) {
            this.id = id;
        },

        category: function () {
            return this.discipline.category;
        }

    });

    return Contest;

});