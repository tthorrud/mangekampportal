'use strict';

define([
    '../../../bower_components/underscore/underscore',
    'backbone'
], function (_, Backbone) {

    var Contestant = Backbone.Model.extend({

        urlRoot: "http://localhost:8080/rest/contestants/results",

        defaults: {
            'id': ''
        },

        initialize: function (id) {
            this.id = id;
        }
    });


    return Contestant;

});