<template>
  <div id="app">
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue"; // Importa el componente

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter, // Registra el componente
  },
};
</script>

<style lang="scss">
/* Tus estilos globales de Sass importados desde main.js */
</style>
