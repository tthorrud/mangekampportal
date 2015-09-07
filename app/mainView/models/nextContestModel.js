/**
 * Created by thorstein on 01.09.15.
 */
'use strict';

define ([
    'jquery',
    'underscore',
    'backbone'
], function(jquery, _, Backbone){

   var nextContestModel = Backbone.Model.extend({
       urlRoot: 'http://localhost:8080/rest/main/nextcontest'


   });

   return nextContestModel;

});