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
    url: 'http://localhost:8080/rest/disciplines',

    fetch : function() {
        // store reference for this collection
        var collection = this;
        $.ajax({
            type : 'GET',
            url : this.url,
            dataType : 'json',
            crossDomain: true,
            success : function(data) {
                console.log(data);
                // set collection data (assuming you have retrieved a json object)
                //collection.reset(data)
            }
        });
    }
});



var Disciplines = new Disciplines();
Disciplines.fetch();