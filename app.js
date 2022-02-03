//vue instance-control a certain part of the application or whole part

new Vue({
    el: "#vue-app",
    data: {
        name: 'Shaun',
        job: 'Ninja',
        website: 'https://github.com/',
        websiteTag: '<a v-bind:href="https://github.com/">Github</a>'
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + " " + this.name ;
        }
    }
});