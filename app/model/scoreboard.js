'use strict';

define([
    'underscore',
    'backbone'
], function (_, Backbone) {

    var Scoreboard = Backbone.Model.extend({

        url: "http://localhost:8080/rest/score"

    });


    return Scoreboard;

});