<template>
	<div id="porcentaje">
		<label> 
			Porcentaje a usar: 
			<input type="text" id="inputPorcentaje" v-model="porc" placeholder="0">
		</label>
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
			this.$emit('pasaPorcentaje', this.porc)
		}
	}
}
</script>

<style scoped>

</style>

