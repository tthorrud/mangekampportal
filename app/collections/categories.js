'use strict';

define([
    'jquery',
    'underscore',
    'backbone'
], function (jquery, _, Backbone) {

    var Categories = Backbone.Collection.extend({
        url: "http://localhost:8080/rest/disciplines/categories",

        formatCategory: function (category) {
            switch (category){
                case 'BALL':
                    return 'Ball';
                case 'ENDURANCE':
                    return 'Kondisjon';
                case 'TECHNIQUE':
                    return 'Teknikk';
            }
        }

    });

    return Categories;

});