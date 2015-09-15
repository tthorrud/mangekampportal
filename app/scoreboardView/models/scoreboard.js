'use strict';

define([
    '../../../bower_components/underscore/underscore',
    'backbone'
], function (_, Backbone) {

    var Scoreboard = Backbone.Model.extend({

        urlRoot: "http://localhost:8080/rest/score"

    });


    return Scoreboard;

});