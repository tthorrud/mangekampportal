/**
 * Created by thorstein on 04.09.15.
 */
'use strict'

define ([
    'jquery',
    'underscore',
    'backbone'
], function(jquery, _, Backbone){

   var latestResultsModel = Backbone.Model.extend({
       url: 'http://localhost:8080/rest/main/lastresults'
   });

   return latestResultsModel;

});