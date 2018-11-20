<template>
<div id="datos">
    <label id="maximo">
        Ingrese el monto buscado:
        <input type="text" id="busca" v-model="busca" placeholder="0">
    </label>
    <hr>
    <IngresoGanancia></IngresoGanancia>

</div>  
</template>

<script>
import IngresoGanancia from "./Ganancia.vue"

export default {
    name: "IngresoDatos",

    components: {
        IngresoGanancia
    },

    data: function() { 
        return {
            ganancia: 0,
            busca: 0
        }
    },
    watch: {
        ganancia: function() {
            console.log(this.ganancia)
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
