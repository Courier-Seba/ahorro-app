
var vm = new Vue({
    el: "#app",

    data: {
        tit1: "Ahorro",
        tit2: "Calculadora",
        cambia: true
    },

    methods: {
        changeText: function () {
            this.cambia = !this.cambia;
        }
    }
 
})