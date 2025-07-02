<template>
  <section class="hero-section">
    <div class="hero-content container">
      <p class="greeting" data-aos="fade-up" data-aos-delay="100">Hola, soy</p>
      <h1 class="hero-title" data-aos="fade-up" data-aos-delay="200">
        <span>Juan David</span>
        <span class="highlight">,</span>
        <br />
        Desarrollador Web.
      </h1>
      <p class="hero-tagline" data-aos="fade-up" data-aos-delay="300">
        Convirtiendo ideas en experiencias digitales excepcionales.
      </p>
      <div class="hero-actions" data-aos="fade-up" data-aos-delay="400">
        <router-link to="/proyectos" class="btn btn-primary">
          Ver Proyectos
        </router-link>
        <router-link to="/contacto" class="btn btn-secondary">
          Contactar
        </router-link>
      </div>
    </div>
  </section>

  <section class="services-section">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Mis Servicios</h2>
      <div class="services-grid">
        <ServiceItem
          :delay="100"
          iconClass="fas fa-desktop"
          title="Desarrollo Web Frontend"
          description="Construcción de interfaces de usuario interactivas y responsivas usando Vue.js, React o Angular, asegurando una experiencia de usuario fluida."
        />
        <ServiceItem
          :delay="200"
          iconClass="fas fa-server"
          title="Desarrollo Backend y APIs"
          description="Creación de lógica de servidor robusta, bases de datos eficientes y APIs RESTful/GraphQL con Node.js, Python o PHP."
        />
        <ServiceItem
          :delay="300"
          iconClass="fas fa-mobile-alt"
          title="Aplicaciones Móviles"
          description="(En proceso de aprendizaje)"
        />
        <ServiceItem
          :delay="100"
          iconClass="fas fa-palette"
          title="Diseño y Prototipado UX/UI"
          description="Desde el concepto hasta el prototipo, diseño interfaces de usuario intuitivas y atractivas, enfocadas en la usabilidad y la estética."
        />
        <ServiceItem
          :delay="200"
          iconClass="fas fa-database"
          title="Bases de Datos"
          description="Implementación y optimización de bases de datos SQL (PostgreSQL, MySQL) y NoSQL (MongoDB, Firebase)"
        />
        <ServiceItem
          :delay="300"
          iconClass="fas fa-cloud-upload-alt"
          title="Despliegue y DevOps"
          description="Configuración y despliegue de aplicaciones en la nube (AWS, Azure, Google Cloud) y automatización de procesos."
        />
      </div>
    </div>
  </section>

  <section class="projects-section">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Mis Proyectos Destacados</h2>
      <div class="projects-grid">
        <ProjectCard
          data-aos="fade-up"
          data-aos-delay="100"
          title="Psicología & Bienestar"
          description="Una plataforma enfocada en servicios de psicología individuales, entidades educativas y empresas."
          :image="require('@/assets/projects-images/project1.webp')"
          :technologies="['HTML', 'Node.js', 'CSS3', 'JavaScript']"
          liveLink="https://psicologiaybienestar.netlify.app/"
        />
        <ProjectCard
          data-aos="fade-up"
          data-aos-delay="200"
          title="IARegTech"
          description="Aplicación web para la verificación en cuanto a la ética de la IA (GUIA)"
          :image="require('@/assets/projects-images/project2.jpg')"
          :technologies="['MySQL', 'Flask', 'Python', 'CRUD']"
          liveLink="https://juandgomezr.github.io/IARegTech/"
          githubLink="https://github.com/JuanDGomezR/IARegTech"
        />
        <ProjectCard
          data-aos="fade-up"
          data-aos-delay="300"
          title="LAPIBANDA"
          description="Frontend basado en una api propia para la interacción con CRUD"
          :image="require('@/assets/projects-images/project3.jpg')"
          :technologies="['APIRest', 'HTML', 'CSS3', 'JavaScript']"
          liveLink="https://juandgomezr.github.io/FRONTEND-LAPIBANDA/"
          githubLink="https://github.com/JuanDGomezR/FRONTEND-LAPIBANDA"
        />
      </div>
      <div class="view-all-projects" data-aos="fade-up" data-aos-delay="400">
        <router-link to="/proyectos" class="btn btn-primary">
          Ver Todos los Proyectos <i class="fas fa-arrow-right"></i>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import ServiceItem from "@/components/ServiceItem.vue";
import ProjectCard from "@/components/ProjectCard.vue"; // Importa el componente ProjectCard

export default {
  name: "HomeView",
  components: {
    ServiceItem,
    ProjectCard, // Registra el componente
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

/* ESTILOS DE LA SECCIÓN HERO (NO CAMBIAN) */
.hero-section {
  min-height: 90vh; /* Ajustado para dejar espacio para el header */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: $color-dark-background;
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden; // Para contener cualquier fondo animado si lo añadimos
}

.hero-content {
  position: relative;
  z-index: 10;
  color: $color-light-text;
  max-width: 900px;
  margin: 0 auto;
}

.greeting {
  font-size: 1.5rem;
  color: $color-gray-text;
  margin-bottom: 0.5rem;
}

.hero-title {
  font-family: $font-heading;
  font-size: 4.5rem; /* Tamaño de fuente grande para impacto */
  line-height: 1.1;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); // Sombra sutil para destacar

  span {
    color: $color-light-text; // Tu nombre en blanco/gris claro
  }

  .highlight {
    color: $color-primary-accent; // El acento (coma o una parte del título) en rojo
  }
}

.hero-tagline {
  font-size: 1.8rem;
  color: $color-gray-text;
  margin-bottom: 3rem;
  font-weight: 300;
}

.hero-actions {
  display: flex;
  gap: 1rem; // Espacio entre los botones
  justify-content: center;
  flex-wrap: wrap; // Para que los botones se envuelvan en móvil
}

/* Media Queries para Responsividad de la sección HERO */
@media (max-width: 992px) {
  .hero-title {
    font-size: 3.8rem;
  }
  .hero-tagline {
    font-size: 1.6rem;
  }
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 80vh;
    padding: 3rem 1.5rem;
  }
  .hero-title {
    font-size: 2.8rem;
  }
  .hero-tagline {
    font-size: 1.4rem;
  }
  .hero-actions {
    flex-direction: column; // Botones apilados en móvil
    gap: 1rem;
  }
  .btn {
    width: 100%; // Botones de ancho completo
    max-width: 300px;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2.2rem;
  }
  .hero-tagline {
    font-size: 1.2rem;
  }
  .greeting {
    font-size: 1.2rem;
  }
}

/* ESTILOS DE LA SECCIÓN DE SERVICIOS */
.services-section {
  padding: 6rem 2rem;
  background-color: $color-dark-background; // Mismo fondo oscuro
  text-align: center;
  border-top: 1px solid rgba($color-light-text, 0.1); // Separador sutil
}

.section-title {
  font-family: $font-heading;
  font-size: 3rem;
  color: $color-primary-accent; // Títulos de sección en rojo
  margin-bottom: 4rem;
  position: relative;
  display: inline-block; // Para centrar el underline si lo añadimos

  &:after {
    // Pequeña línea debajo del título de la sección
    content: "";
    display: block;
    width: 80px;
    height: 4px;
    background-color: $color-light-text; // Línea en blanco/gris claro
    margin: 10px auto 0;
    border-radius: 2px;
  }
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(300px, 1fr)
  ); // Grid responsivo
  gap: 3rem; // Espacio entre los ítems
}

/* Media Queries para responsividad de la sección de servicios */
@media (max-width: 992px) {
  .services-section {
    padding: 4rem 2rem;
  }
  .section-title {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
  .services-grid {
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .services-section {
    padding: 3rem 1.5rem;
  }
  .section-title {
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }
  .services-grid {
    grid-template-columns: 1fr; // Una columna en móvil
    gap: 1.5rem;
  }
}

/* ESTILOS DE LA SECCIÓN DE PROYECTOS */
.projects-section {
  padding: 6rem 2rem;
  background-color: darken(
    $color-dark-background,
    2%
  ); // Un negro ligeramente más oscuro para contrastar
  text-align: center;
  border-top: 1px solid rgba($color-light-text, 0.1); // Separador sutil
}

.section-title {
  // Reutilizamos los estilos del título de sección de servicios
  font-family: $font-heading;
  font-size: 3rem;
  color: $color-primary-accent;
  margin-bottom: 4rem;
  position: relative;
  display: inline-block;

  &:after {
    content: "";
    display: block;
    width: 80px;
    height: 4px;
    background-color: $color-light-text;
    margin: 10px auto 0;
    border-radius: 2px;
  }
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(320px, 1fr)
  ); // Grid responsivo para proyectos
  gap: 3rem; // Espacio entre las tarjetas
  margin-bottom: 4rem;
}

.view-all-projects {
  text-align: center;
  .btn {
    // Usamos los estilos de botón ya definidos
    padding: 1rem 3rem;
    font-size: 1.2rem;
    i {
      margin-left: 10px;
      transition: transform 0.3s ease;
    }
    &:hover i {
      transform: translateX(5px);
    }
  }
}

/* Media Queries para responsividad de la sección de proyectos */
@media (max-width: 992px) {
  .projects-section {
    padding: 4rem 2rem;
  }
  .section-title {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
  .projects-grid {
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .projects-section {
    padding: 3rem 1.5rem;
  }
  .section-title {
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }
  .projects-grid {
    grid-template-columns: 1fr; // Una columna en móvil
    gap: 1.5rem;
  }
  .view-all-projects .btn {
    width: 100%;
    max-width: 350px;
  }
}
</style>
