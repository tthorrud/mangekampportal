define([
    'jquery',
    'underscore',
    'backbone',
    'views/disciplines',
    'collections/disciplines'
], function (_, Backbone, disciplinesView, disciplinesCollection) {
    'use strict';

    var AppView = Backbone.View.extend({
        el: '#disciplinesapp'

    });

    return AppView;
});