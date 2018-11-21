<template>
    <div id="resultado">
        <h2>{{ resultado }}</h2>
    </div>
</template>

<script>
export default {
    name: 'ResultadoFinal',

    props: ['datos'],

    computed: {
        resultado: function() {
            let cantUsada = this.datos.ganancia * (this.datos.porcentaje / 100);
            let tantasVeces = cantUsada / this.datos.buscado;
            
            let stringFinal = ` Guarda ${cantUsada} cada ${this.datos.tiempo} durante ${tantasVeces} ${this.datos.tiempo}`;
            return stringFinal
        }
    }
}
</script>

<style>

</style>
