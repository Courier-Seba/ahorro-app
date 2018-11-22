<template>
<div id="main">
	<titulo-principal></titulo-principal>
	<ingreso-datos
		@pasaDatos="tomaDatos"
	></ingreso-datos>
	<resultado-final
		:datos=datos
	></resultado-final>
	
</div>
</template>

<script>
import TituloPrincipal from "./components/Titulo.vue";
import IngresoDatos from "./components/Datos.vue";
import ResultadoFinal from "./components/Resultado.vue";

export default {
	name: "app",
	data() {
		return {
			datos: {}
		}
	},

	components: {
		TituloPrincipal,
		IngresoDatos,
		ResultadoFinal
	},

	methods: {
		tomaDatos: function(payload) {
			this.datos = payload;
		}
	},

};
</script>

<style>

* {
	padding: 0;
	margin: 0;
}

body {
	background-color: #eeeeee ;
}

#main {
	margin: 5%;
	border-color: darkslategray;
	border-style: inset;
}
</style>
