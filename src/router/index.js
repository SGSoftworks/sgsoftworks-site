import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "JGSoftworks | Portafolio Oficial",
      description:
        "Portafolio oficial de Juan David, desarrollador web Full Stack especializado en Vue.js, Node.js y bases de datos. ¡Transformo tus ideas en experiencias digitales!",
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
    },
  },
  // Opcional: Ruta para 404
  {
    path: "/:pathMatch(.*)*", // Captura cualquier ruta no definida
    name: "NotFound",
    component: () => import("../views/NotFoundView.vue"), // ¡Aquí está el problema!
    meta: {
      title: "Página no encontrada - 404",
      description:
        "Lo sentimos, la página que buscas no existe en este portafolio.",
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

// AÑADE ESTE BLOQUE:
router.beforeEach((to, from, next) => {
  // Establecer el título de la página
  document.title = to.meta.title || "Juan David - Portafolio Web"; // Fallback a un título genérico

  // Actualizar la meta descripción
  let descriptionMeta = document.querySelector('meta[name="description"]');
  if (!descriptionMeta) {
    // Si no existe, la creamos
    descriptionMeta = document.createElement("meta");
    descriptionMeta.setAttribute("name", "description");
    document.head.appendChild(descriptionMeta);
  }
  descriptionMeta.setAttribute(
    "content",
    to.meta.description || "Portafolio de desarrollador web Full Stack."
  );

  // otras meta etiquetas  (ej. og:title, og:description, etc. para redes sociales)
  // (Facebook, LinkedIn, etc.):
  // let ogTitleMeta = document.querySelector('meta[property="og:title"]');
  // if (!ogTitleMeta) {
  //   ogTitleMeta = document.createElement('meta');
  //   ogTitleMeta.setAttribute('property', 'og:title');
  //   document.head.appendChild(ogTitleMeta);
  // }
  // ogTitleMeta.setAttribute('content', to.meta.title || 'Juan David - Portafolio Web');

  // let ogDescriptionMeta = document.querySelector('meta[property="og:description"]');
  // if (!ogDescriptionMeta) {
  //   ogDescriptionMeta = document.createElement('meta');
  //   ogDescriptionMeta.setAttribute('property', 'og:description');
  //   document.head.appendChild(ogDescriptionMeta);
  // }
  // ogDescriptionMeta.setAttribute('content', to.meta.description || 'Portafolio de desarrollador web Full Stack.');

  next(); // Continúa con la navegación
});

export default router;
