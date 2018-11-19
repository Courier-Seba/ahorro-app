<template>
<div id="datos">
    <label>
        Ingrese su ganancia por dia
        <input type="text" id="ganancia" v-model="ganancia" placeholder="0">
    </label>
    <br>
    <label>
        Ingrese el monto buscado
        <input type="text" id="busca" v-model="busca" placeholder="0">
    </label>
</div>  
</template>

<script>
export default {
    name: "Datos",
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
    display: grid;
    grid-gap: 5px;
}

input {
    border-color: blue;
    border-width: 1px;
}

label {
    grid-row: 1;
}

</style>
