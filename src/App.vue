<template>
<div id="main">
  <Titulo></Titulo>
  <Datos></Datos>
</div>
</template>

<script>
import Titulo from './components/Titulo.vue'
import Datos from './components/Datos.vue'

export default {
  name: 'app',
  components: {
    Titulo,
    Datos
  }
}
</script>

<style>
* { padding: 0; margin: 0; }

#app {
    text-align: center;
    display: grid;
    grid-template-rows: 40px; 
}

</style>
