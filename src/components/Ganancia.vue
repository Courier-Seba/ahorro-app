<template>
    <div id="ganancia">
        <label for="formaGananca">Su ingreso por: </label>
    
        <select id="formaGanancia" v-model="eleccion">
            <option>Por día</option>
            <option>Por mes</option>
            <option>Por año</option>
        </select>

        <input type="text" v-model="ganancia" placeholder="0">
    </div>
</template>

<script>
export default {
    name: 'IngresoGanancia',

    data: function() {
        return {
            eleccion: "",
            ganancia: ""
        }
    },

}
</script>

<style scoped>

</style>


