import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// Importaciones de tus vistas actuales (asegúrate que existan con estos nombres)
// Si no las tienes como imports directos aquí, no pasa nada si están con importaciones dinámicas más abajo.
// Si las tienes como importaciones directas, descomenta las líneas correspondientes o ajústalas.
// import ServicesView from "../views/ServicesView.vue";
// import ProjectsView from "../views/ProjectsView.vue";
// import AboutView from "../views/AboutView.vue";
// import ContactView from "../views/ContactView.vue";


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "JGSoftworks | Portafolio Oficial",
      description:
        "Portafolio oficial de Juan David, desarrollador web Full Stack especializado en Vue.js, Node.js y bases de datos. ¡Transformo tus ideas en experiencias digitales!",
      // Asegúrate de tener estas imágenes si las usas para Open Graph
      ogImage: require('@/assets/images/og-home.jpg')
    },
  },
  {
    path: "/servicios",
    name: "services",
    component: () =>
      import(/* webpackChunkName: "services" */ "../views/ServicesView.vue"),
    meta: {
      title: "Servicios de Desarrollo Web | Frontend, Backend, UI/UX y más",
      description:
        "Descubre los servicios de desarrollo web que ofrezco: desarrollo frontend, backend, diseño UX/UI, PWAs, bases de datos y despliegue. Soluciones a medida para tu proyecto.",
      ogImage: require('@/assets/images/og-services.jpg')
    },
  },
  {
    path: "/proyectos",
    name: "projects",
    component: () =>
      import(/* webpackChunkName: "projects" */ "../views/ProjectsView.vue"),
    meta: {
      title: "Proyectos - Mi Portafolio Web | Trabajos Destacados",
      description:
        "Explora una selección de mis proyectos más recientes. Ejemplos de desarrollo web frontend y backend, soluciones completas y diseños interactivos.",
      ogImage: require('@/assets/images/og-projects.jpg')
    },
  },
  {
    path: "/precios", // ¡NUEVA RUTA!
    name: "prices", // Nombre de la ruta
    component: () =>
      import(/* webpackChunkName: "prices" */ "../views/PreciosView.vue"), // Importación dinámica
    meta: {
      title: "Precios y Planes | JGSoftworks.dev",
      description:
        "Descubre los paquetes de servicios de desarrollo web y precios ofrecidos por JGSoftworks.dev. Soluciones escalables para cada necesidad y presupuesto.",
      ogImage: require('@/assets/images/og-prices.jpg') // Asegúrate de tener una imagen para esto
    },
  },
  {
    path: "/sobre-mi",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    meta: {
      title: "Sobre Mí | Mi Historia y Habilidades",
      description:
        "Conoce más sobre Juan David, mi trayectoria como desarrollador, mis habilidades en desarrollo frontend y backend, y mi pasión por crear soluciones web innovadoras.",
      ogImage: require('@/assets/images/og-about.jpg')
    },
  },
  {
    path: "/contacto",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/ContactView.vue"),
    meta: {
      title: "Contacto - ¡Hablemos de tu Proyecto!",
      description:
        "Ponte en contacto con Juan David para discutir tu próximo proyecto web. Envíame un mensaje y te responderé lo antes posible.",
      ogImage: require('@/assets/images/og-contact.jpg')
    },
  },
  // Opcional: Ruta para 404
  {
    path: "/:pathMatch(.*)*", // Captura cualquier ruta no definida
    name: "NotFound",
    component: () => import("../views/NotFoundView.vue"),
    meta: {
      title: "Página no encontrada - 404",
      description:
        "Lo sentimos, la página que buscas no existe en este portafolio.",
      ogImage: require('@/assets/images/og-404.jpg')
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // Comportamiento de desplazamiento
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, left: 0 };
    }
  },
});

// Ajuste en el router.beforeEach para manejar keywords y og:image
router.beforeEach((to, from, next) => {
  // Establecer el título de la página
  document.title = to.meta.title || "Juan David - Portafolio Web";

  // Actualizar la meta descripción
  let descriptionMeta = document.querySelector('meta[name="description"]');
  if (!descriptionMeta) {
    descriptionMeta = document.createElement("meta");
    descriptionMeta.setAttribute("name", "description");
    document.head.appendChild(descriptionMeta);
  }
  descriptionMeta.setAttribute(
    "content",
    to.meta.description || "Portafolio de desarrollador web Full Stack."
  );

  // Actualizar la meta keywords (si la usas)
  let keywordsMeta = document.querySelector('meta[name="keywords"]');
  if (!keywordsMeta) {
    keywordsMeta = document.createElement("meta");
    keywordsMeta.setAttribute("name", "keywords");
    document.head.appendChild(keywordsMeta);
  }
  keywordsMeta.setAttribute(
    "content",
    to.meta.keywords || "desarrollo web, full stack, frontend, backend"
  ); // Fallback de keywords

  // Actualizar la meta og:image para redes sociales
  let ogImageMeta = document.querySelector('meta[property="og:image"]');
  if (!ogImageMeta) {
    ogImageMeta = document.createElement("meta");
    ogImageMeta.setAttribute("property", "og:image");
    document.head.appendChild(ogImageMeta);
  }
  ogImageMeta.setAttribute(
    "content",
    to.meta.ogImage || require('@/assets/images/og-default.jpg') // Usa una imagen por defecto si no hay una específica
  );

  // Aquí también puedes actualizar og:title, og:description si lo deseas, usando to.meta.title y to.meta.description
  let ogTitleMeta = document.querySelector('meta[property="og:title"]');
  if (!ogTitleMeta) {
    ogTitleMeta = document.createElement('meta');
    ogTitleMeta.setAttribute('property', 'og:title');
    document.head.appendChild(ogTitleMeta);
  }
  ogTitleMeta.setAttribute('content', to.meta.title || 'Juan David - Portafolio Web');

  let ogDescriptionMeta = document.querySelector('meta[property="og:description"]');
  if (!ogDescriptionMeta) {
    ogDescriptionMeta = document.createElement('meta');
    ogDescriptionMeta.setAttribute('property', 'og:description');
    document.head.appendChild(ogDescriptionMeta);
  }
  ogDescriptionMeta.setAttribute('content', to.meta.description || 'Portafolio de desarrollador web Full Stack.');


  next(); // Continúa con la navegación
});

export default router;