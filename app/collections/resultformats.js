'use strict';

define([
    'jquery',
    'underscore',
    'backbone'
], function (jquery, _, Backbone) {

    var Resultformats = Backbone.Collection.extend({
        url: "http://localhost:8080/rest/disciplines/resultformats",

        formatResultFormat: function (resultFormat) {
            switch (resultFormat) {
                case 'INTEGER_INCREASING':
                    return 'Heltall (stigende)';
                case 'INTEGER_DECREASING':
                    return 'Heltall (synkende)';
                case 'DECIMAL_INCREASING':
                    return 'Desimaltall (stigende)';
                case 'DECIMAL_DECREASING':
                    return 'Desimaltall (synkende)';
                case 'TIME_INCREASING':
                    return 'Tid (stigende)';
                case 'TIME_DECREASING':
                    return 'Tid (synkende)';
            }
        }
    });

    return Resultformats;

});