/**
 * Created by thorstein on 26.08.15.
 */
//http://localhost:8080/rest/disciplines
'use strict'
/*
    id:1,
    name:"",
    description:"",
    category:"",
    resultFormat:"",
    pictogram:""
*/

var disciplineModel = Backbone.Model.extend({


});

var disciplinesCollection = Backbone.Collection.extend({
    
    model: disciplineModel,
    url: "http://localhost:8080/rest/disciplines",

    
});


/*var ItemView = Backbone.View.extend({
    el:'#list',
    tagName:'ul'

    render: function(){
        console.log(disciplines);
        this.$el.html(disciplines);
    }
});
*/
var c = new disciplinesCollection();


var v = Backbone.View.extend({
    el : '#mydiv',
    template : _.template($("#details").html()),
    initialize : function() {
        var self = this;
        this.coll = new disciplinesCollection(); 
        this.coll.fetch({ 
        success: function() { 
            console.log(self.coll);
            self.render();
        },
        error: function() {
            console.log("D");
        } 
        });              
    },
    render : function() {
      // the persons will be "visible" in your template
      this.$el.html(this.template({ disciplines: this.coll.toJSON() }));
      return this;
    }
});

var view = new v();