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
  duration: 600, 
  easing: "ease-out",
  once: true,
  mirror: false,
  anchorPlacement: "top-bottom",
});
