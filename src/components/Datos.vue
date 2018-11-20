<template>
<div id="datos">
    <label id="maximo">
        Ingrese el monto buscado:
        <input type="text" id="busca" v-model="busca" placeholder="0">
    </label>
    <hr>
    <ingreso-ganancia 
        @recibeTiempo="acumTiempo"
        @recibeGanancia="acumGanancia"
    >
    </ingreso-ganancia>
    <ingreso-porcentaje
        @recibePorcentaje="acumPorc"
    >
    </ingreso-porcentaje>
</div>  
</template>

<script>
import IngresoGanancia from "./Ganancia.vue";
import IngresoPorcentaje from "./Porcentaje.vue"

export default {
    name: "IngresoDatos",

    components: {
        IngresoGanancia,
        IngresoPorcentaje
    },

    data() {
        return {
            busca: 0,
            tiempo: "",
            ganancia: 0,
            porcentaje: 0

        }
    },

    methods: {
        acumTiempo: function(payload) {
            this.tiempo = payload;
        },

        acumGanancia: function(payload) {
            this.ganancia = payload;
        },

        acumPorc: function(payload) {
            this.porcentaje = payload;
        }
    },

    watch: {
        busca: function() {
            this.busca = Number(this.busca)
        },
    }
}
</script>

<style scoped>

#datos {
    text-align: center;
    display: grid;
    grid-gap: 5px;
    background-color: lightblue;
}

#maximo {
    grid-row: 1;
}

#datos {
    grid-row: 2;
}

</style>
