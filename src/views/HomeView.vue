<template>
  <section class="hero-section">
    <div class="hero-content container">
      <p class="greeting" data-aos="fade-up" data-aos-delay="100">Hola, soy</p>
      <h1 class="hero-title" data-aos="fade-up" data-aos-delay="200">
        <span>Juan David</span>
        <span class="highlight">,</span>
        <br />
        <span class="typed-text">Desarrollador Web</span>
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
          data-aos="zoom-in-up"
          data-aos-delay="100"
          title="Psicología & Bienestar"
          description="Una plataforma enfocada en servicios de psicología individuales, entidades educativas y empresas."
          :image="require('@/assets/projects-images/psicobienestar.webp')"
          :technologies="['HTML', 'Node.js', 'CSS3', 'JavaScript']"
          liveLink="https://psicologiaybienestar.netlify.app/"
        />
        <ProjectCard
          data-aos="zoom-in-up"
          data-aos-delay="200"
          title="IARegTech"
          description="Aplicación web para la verificación en cuanto a la ética de la IA (GUIA)"
          :image="require('@/assets/projects-images/iaregtech.webp')"
          :technologies="['MySQL', 'Flask', 'Python', 'CRUD']"
          liveLink="https://juandgomezr.github.io/IARegTech/"
          githubLink="https://github.com/JuanDGomezR/IARegTech"
        />
        <ProjectCard
          data-aos="zoom-in-up"
          data-aos-delay="300"
          title="Noticias Geek"
          description="Portal web para ver noticias de videojuegos, películas y tecnología de forma sencilla y rápida."
          :image="require('@/assets/projects-images/geekNews.webp')"
          :technologies="['HTML', 'CSS', 'JavaScript', 'APIs']"
          liveLink="https://juandgomezr.github.io/noticiasgeek/"
          githubLink="https://github.com/JuanDGomezR/noticiasgeek"
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
import ProjectCard from "@/components/ProjectCard.vue";

export default {
  name: "HomeView",
  components: {
    ServiceItem,
    ProjectCard,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.hero-section {
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: $color-dark-background;
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
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
  font-size: 4.5rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);

  span {
    color: $color-light-text;
  }

  .highlight {
    color: $color-primary-accent;
  }
  .typed-text {
    color: $color-primary-accent;
    display: inline-block;
    font-weight: bold;
    letter-spacing: 1px;
    animation: typing 2.2s steps(18, end) 0.5s 1 normal both,
      blink-caret 0.7s step-end infinite;
    border-right: 2.5px solid $color-secondary-accent;
    white-space: nowrap;
    overflow: hidden;
    min-width: 0;
    width: auto;
    max-width: 100vw;
    box-sizing: border-box;
  }
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  @keyframes blink-caret {
    0%,
    100% {
      border-color: transparent;
    }
    50% {
      border-color: $color-light-text;
    }
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
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

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
    flex-direction: column;
    gap: 1rem;
  }
  .btn {
    width: 100%;
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
  background-color: $color-dark-background;
  text-align: center;
  border-top: 1px solid rgba($color-light-text, 0.1);
}

.section-title {
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

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
}

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
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

.projects-section {
  padding: 6rem 2rem;
  background-color: darken($color-dark-background, 2%);
  text-align: center;
  border-top: 1px solid rgba($color-light-text, 0.1);
}

.section-title {
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
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 3rem;
  margin-bottom: 4rem;
}

.view-all-projects {
  text-align: center;
  .btn {
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
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .view-all-projects .btn {
    width: 100%;
    max-width: 350px;
  }
}
</style>
