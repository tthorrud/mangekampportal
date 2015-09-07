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
        url:"http://localhost:8080/rest/contests",
        byColor: function (color) {
        filtered = this.filter(function (box) {
            return box.get("color") === color;
        });
        return new Boxes(filtered);
    }

    });

    return Contests;

});