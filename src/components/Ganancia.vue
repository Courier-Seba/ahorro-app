<template>
    <div id="ganancia">
        <label>Su ingreso por: </label>

        <select v-model="eleccion">
            <option value="d">Por día</option>
            <option value="m">Por mes</option>
            <option value="a">Por año</option>
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

    watch: {
        eleccion: function()  {
            this.$emit('recibeTiempo', this.eleccion);
        },
        ganancia: function() {
            this.ganancia = Number(this.ganancia);
            this.$emit('recibeGanancia',this.ganancia);
        }
    },

}
</script>

<style scoped>

select {
    margin: 5px;
}
</style>


