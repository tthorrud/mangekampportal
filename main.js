/**
 * Created by thorstein on 26.08.15.
 */


var MainView = Backbone.View.extend({
el: '#mainView',

    initialize: function(){
    this.render();
},

render: function(){
    this.$el.html("Hello world")
}

});

var m = new MainView();

var Discipline = Backbone.Model.extend({

    defaults:{
        name: ""

    }

});

var Disciplines = Backbone.Collection.extend({

    model: Discipline,
    url: 'http://localhost:8080/rest/disciplines'

});

var Disciplines = new Disciplines();
Disciplines.fetch();