'use strict'

define ([
    'jquery',
    'underscore',
    'backbone'
], function(jquery, _, Backbone){

    var nextContestStatusModel = Backbone.Model.extend({
        url: 'http://localhost:8080/rest/main/nextconteststatus',

        default: {
            status: false
        }

    });

    return nextContestStatusModel;

});