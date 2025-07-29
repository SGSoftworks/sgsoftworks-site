<template>
  <div class="not-found">
    <h1>404 - Página no encontrada</h1>
    <p>Lo sentimos, la página que buscas no existe.</p>
    <router-link to="/">Volver al inicio</router-link>
  </div>
</template>

<script>
export default {
  name: "NotFoundView",
};
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 50px;
  min-height: calc(
    100vh - 120px
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  color: #333;
}

.not-found h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
}

.not-found p {
  font-size: 1.2em;
  margin-bottom: 30px;
}

.not-found a {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.not-found a:hover {
  background-color: #0056b3;
}
</style>
