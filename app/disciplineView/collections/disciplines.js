'use strict';

define([
    '../../../bower_components/jquery/dist/jquery',
    'underscore',
    'backbone',
    'disciplineView/models/discipline'
], function (jquery, _, Backbone, Discipline) {

    var Disciplines = Backbone.Collection.extend({

        model: Discipline,
        url: "http://localhost:8080/rest/disciplines"
    });

    return Disciplines;

});