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
      import("../views/ServicesView.vue"),
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
      import("../views/ProjectsView.vue"),
    meta: {
      title: "Proyectos - Mi Portafolio Web | Trabajos Destacados",
      description:
        "Explora una selección de mis proyectos más recientes. Ejemplos de desarrollo web frontend y backend, soluciones completas y diseños interactivos.",
    },
  },
  // Próxima actualización
  // {
  //   path: "/precios",
  //   name: "prices",
  //   component: () =>
  //     import("../views/PricesView.vue"),
  //   meta: {
  //     title: "Precios y Planes | JGSoftworks.dev",
  //     description:
  //       "Descubre los paquetes de servicios de desarrollo web y precios ofrecidos por JGSoftworks.dev. Soluciones escalables para cada necesidad y presupuesto.",
  //   },
  // },
  {
    path: "/sobre-mi",
    name: "about",
    component: () =>
      import("../views/AboutView.vue"),
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
      import("../views/ContactView.vue"),
    meta: {
      title: "Contacto - ¡Hablemos de tu Proyecto!",
      description:
        "Ponte en contacto con Juan David para discutir tu próximo proyecto web. Envíame un mensaje y te responderé lo antes posible.",
    },
  },

  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFoundView.vue"),
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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, left: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Juan David - Portafolio Web";

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
  next();
});

export default router;
