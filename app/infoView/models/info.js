'use strict';

define([
    '../../../bower_components/underscore/underscore',
    'backbone'
], function (_, Backbone) {

    var infoModel = Backbone.Model.extend({

        urlRoot: 'http://localhost:8080/rest/info',

    });

    return infoModel;

});






