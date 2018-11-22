<template>
	<div id="resultado">
		<h2 v-if="completo">{{ resultado }}</h2>
	</div>
</template>

<script>
export default {
	name: 'ResultadoFinal',

	props: ['datos'],

	computed: {

		resultado: function() {
			let cantUsada = this.datos.ganancia * (this.datos.porcentaje / 100);
			let tantasVeces = this.datos.buscado / cantUsada;
			let stringCant = `Guarda ${cantUsada} cada ${this.datos.tiempo}`;
			let stringCada = ` durante ${tantasVeces} ${this.datos.tiempo}s`;
			return stringCant + stringCada
		},

		completo: function() {
			if (this.isEmpty(this.datos)){
				return false;
			} else { 
				return true;
			}
		}
	},

	methods: {
		isEmpty: function(obj) {
			for(var prop in obj) {
				if(obj.hasOwnProperty(prop)){
					return false;
				}
			}
			return true;
		}
	}
}
</script>

<style>

</style>
