<template>
    <div id="ganancia">
        <label>Su ingreso por: </label>

        <select v-model="eleccion">
            <option value="dia">Por día</option>
            <option value="mes">Por mes</option>
            <option value="año">Por año</option>
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
            this.$emit('pasaTiempo', this.eleccion);
        },
        ganancia: function() {
            this.ganancia = Number(this.ganancia);
            this.$emit('pasaGanancia',this.ganancia);
        }
    },

}
</script>

<style scoped>

select {
    margin: 5px;
}
</style>


