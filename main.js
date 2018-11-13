Vue.component('titulo', {
    template: 
        "<div id=titulo> <h1 >Calculadora de Ahorro</h1> </div>",
});

Vue.component('dias', {
    template: "<input type='text' value=0>"
});

// Root
var vm = new Vue({
    el: "#app",

    data: {
        cambia: true
    },

    methods: {
        changeText: function () {
            this.cambia = !this.cambia;
        }
    }
 
})