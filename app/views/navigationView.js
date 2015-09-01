/**
 * Created by torbein on 01.09.15.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/navigation.html'
], function(jquery, _, Backbone, NavigationTemplate){

    var NavigationView = Backbone.View.extend({
        el:'#nav',
        template: _.template(NavigationTemplate),

        render:function(){
            this.$el.html(this.template);
            return this;
        }

    });

    return NavigationView;
});