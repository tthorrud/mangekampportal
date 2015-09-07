'use strict';

define([
    'underscore',
    'backbone'
], function (_, Backbone) {

    var disciplineModel = Backbone.Model.extend({

        urlRoot: 'http://localhost:8080/rest/disciplines',

        defaults: {
            "id": null,
            "name":"",
            "description":"",
            "category":"",
            "resultFormat":"",
            "pictogram":""
        }

    });

    return disciplineModel;

});






