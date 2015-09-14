'use strict';

define([
    'jquery',
    'underscore',
    'backbone'
], function (jquery, _, Backbone) {

    var Pictograms = Backbone.Collection.extend({
        url: "http://localhost:8080/rest/disciplines/pictograms"
    });

    return Pictograms;

});