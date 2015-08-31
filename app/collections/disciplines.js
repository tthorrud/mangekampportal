
    define([
        '../../bower_components/underscore/underscore',
        'backbone',
        'models/disciplines'
    ], function (_, Backbone, disciplineModel) {
        'use strict';

        var disciplinesCollection = Backbone.Collection.extend({

            model: disciplineModel,
            url: "http://localhost:8080/rest/disciplines",
        });

        return new disciplinesCollection();

    });