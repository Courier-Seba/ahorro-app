<template>
	<div id="resultado">
		<h2 v-if="completo">{{ resultado }}</h2>
		<h6 v-else>Ingrese los datos</h6>
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
#resultado {
	text-align: center;
	padding: 2%;
	background-color: #5588FF
}

h6 {
	color: #333333;
	border-color: black;
	border-style: solid;
	border-width: 1px;
}
</style>