/**
 * Created by torbein on 01.09.15.
 */
'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'model/contestant'
], function(jquery, _, Backbone, Contest){

    var Contests = Backbone.Collection.extend({

        model: Contest,
        url:"http://localhost:8080/rest/contests"

    });

    return Contests;

});