'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'model/discipline'
], function (jquery, _, Backbone, Discipline) {

    var Disciplines = Backbone.Collection.extend({

        model: Discipline,
        url: "http://localhost:8080/rest/disciplines"
    });

    return Disciplines;

});