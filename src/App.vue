<template>
<div id="main">
  <TituloPrincipal></TituloPrincipal>
  <IngresoDatos></IngresoDatos>
</div>
</template>

<script>
import TituloPrincipal from "./components/Titulo.vue";
import IngresoDatos from "./components/Datos.vue";

export default {
  name: "app",
  components: {
    TituloPrincipal,
    IngresoDatos
  }
};
</script>

<style>

* {
  padding: 0;
  margin: 0;
}

#app {
  text-align: center;
  display: grid;
  grid-template-rows: 40px;
}
</style>
