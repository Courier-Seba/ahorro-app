<template>
    <div id="ganancia">
        <label for="formaGananca">Porcentaje a usar: </label>
        <input type="text" id="inputPorcentaje" v-model="porc" placeholder="0">
    </div>
</template>

<script>
export default {
    name: 'IngresoPorcentaje',

    data: function() {
        return {
            porc: 0
        }
    },

    watch: {
        porc: function() {
            this.porc = Number(this.porc)
            console.log(this.porc)
        }
    }
}
</script>

<style scoped>

</style>

