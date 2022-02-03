//vue instance-control a certain part of the application or whole part

new Vue({
    el: "#vue-app",
    data: {
        name: 'Shaun',
        job: 'Ninja',
        website: 'https://github.com/',
        websiteTag: '<a v-bind:href="https://github.com/">Github</a>',

        age: 25,

        x:0,
        y:0,

//---------------TWO WAY BINDING
       Name: '',
       Age: '',

//---------------TWO WAY BINDING
       ageC: 25,
       a:0,
       b:0
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + " " + this.name ;
        },
        add: function(inc) {
            this.age = this.age + inc;
        },
        subtract: function(dec) {
            this.age -= dec;
        },
        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function() {
            alert("You clicked me");
        },

        //---------------KEYBOARD EVENTS
        logName: function() {
            console.log("you entered your name");
        },
        logAge: function() {
            console.log("you entered your age");
        },

//---------------TWO WAY BINDING
        /*addToA: function(){
            return this.a + this.age;
          },
          addToB: function(){
            return this.b + this.age;
          }*/
    },

    computed: {

        addToA: function(){
          console.log('addToA');
          return this.a + this.age;
        },
        addToB: function(){
           console.log('addTOB');
          return this.b + this.age;
        }
    }
});