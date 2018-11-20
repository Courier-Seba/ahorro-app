<template>
    <div id="ganancia">
        <label for="formaGananca">Su ingreso por: </label>
        <select id="formaGanancia">
            <option value="dia">Por día</option>
            <option value="mes">Por mes</option>
            <option value="año">Por año</option>
        </select>
        <input type="text" id="ganancia" v-model="ganancia" placeholder="0">
    </div>
</template>

<script>
export default {
    name: 'IngresoGanancia',

    data() {
        eleccio: "";
    },

}
</script>

<style scoped>

</style>


