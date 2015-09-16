/**
 * Created by torbein on 01.09.15.
 */
'use strict';

define([
    '../../../bower_components/jquery/dist/jquery',
    'underscore',
    'backbone',
    'contestantView/models/contestant'
], function(jquery, _, Backbone, Contestant){

    var Contestants = Backbone.Collection.extend({

        model: Contestant,
        url:"http://localhost:8080/rest/contestants"

    });

    return Contestants;

});