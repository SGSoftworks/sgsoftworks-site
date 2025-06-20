// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/main.scss";

import AOS from "aos";
import "aos/dist/aos.css";

createApp(App).use(router).mount("#app");

// Inicializar AOS
AOS.init({
  offset: 120,
  delay: 0,
  duration: 600, // <--- CAMBIAR AQUÍ (prueba 600ms o 400ms para más rapidez)
  easing: "ease-out", // <--- CAMBIAR AQUÍ a un easing diferente si quieres más agilidad
  once: true,
  mirror: false,
  anchorPlacement: "top-bottom",
});
