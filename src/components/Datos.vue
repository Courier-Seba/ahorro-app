<template>
<div id="datos">
    <label id="maximo">
        Ingrese el monto buscado:
        <input type="text" id="busca" v-model="busca" placeholder="0">
    </label>
    <hr>
    <IngresoGanancia></IngresoGanancia>
    <ingreso-porcentaje></ingreso-porcentaje>


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
            busca: 0
        }
    },

    watch: {
        busca: function() {
            console.log(busca)
        }
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
