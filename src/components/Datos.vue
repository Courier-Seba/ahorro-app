<template>
<div id="datos">
    <label id="maximo">
        Ingrese el monto buscado:
        <input type="text" id="busca" v-model="busca" placeholder="0">
    </label>
    <hr>
    <ingreso-ganancia 
        @pasaTiempo="acumTiempo"
        @pasaGanancia="acumGanancia"
    >
    </ingreso-ganancia>
    <ingreso-porcentaje
        @pasaPorcentaje="acumPorc"
    >
    </ingreso-porcentaje>
</div>  
</template>

<script>
import IngresoGanancia from "./Ganancia.vue";
import IngresoPorcentaje from "./Porcentaje.vue";

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
            this.pasaDatos();
        },

        acumGanancia: function(payload) {
            this.ganancia = payload;
            this.pasaDatos();

        },

        acumPorc: function(payload) {
            this.porcentaje = payload;
            this.pasaDatos();
        },
    
        pasaDatos: function() {
            if ((this.busca > 0) && (this.ganancia > 0))  {
                if ((this.porcentaje > 0) && (this.porcentaje <= 100)) {
                    let payload = {
                        buscado: this.busca,
                        ganancia: this.ganancia,
                        porcentaje: this.porcentaje,
                        tiempo: this.tiempo
                    };
                    this.$emit('pasaDatos', payload);
                }
            }
        },

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
