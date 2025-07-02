<template>
  <section class="projects-page-section">
    <div class="container">
      <h1 class="section-title" data-aos="fade-up">Mi Portafolio Completo</h1>
      <p class="section-description" data-aos="fade-up" data-aos-delay="100">
        Aquí encontrarás una selección de mis trabajos más recientes y proyectos
        destacados, que demuestran mi capacidad para transformar ideas en
        soluciones digitales funcionales e innovadoras.
      </p>

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
          :technologies="['API´s', 'HTML', 'CSS3', 'JavaScript']"
          liveLink="https://juandgomezr.github.io/FRONTEND-LAPIBANDA/"
          githubLink="https://github.com/JuanDGomezR/FRONTEND-LAPIBANDA"
        />
        <ProjectCard
          data-aos="fade-up"
          data-aos-delay="100"
          title="PokéWiki"
          description="Un proyecto sencillo sobre el mundo Pokémon."
          :image="require('@/assets/projects-images/project5.jpg')"
          :technologies="['HTML', 'CSS', 'JavaScript']"
          liveLink="https://juandgomezr.github.io/poke-wiki/"
          githubLink="https://github.com/JuanDGomezR/poke-wiki"
        />
        <ProjectCard
          data-aos="fade-up"
          data-aos-delay="200"
          title="Códigos JS"
          description="Ejemplos de cuando aprendí a usar JavaScript."
          :image="require('@/assets/projects-images/project5.jpg')"
          :technologies="['JavaScript']"
          githubLink="https://github.com/JuanDGomezR/Actividades-JS"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue"; // Importa el componente ProjectCard

export default {
  name: "ProjectsView",
  components: {
    ProjectCard, // Registra el componente
  },
  data() {
    return {
      // categories: ['Todos', 'Frontend', 'Backend', 'Fullstack', 'Diseño'],
      // currentCategory: 'Todos',
      // projects: [ /* Tus datos de proyectos aquí */ ]
    };
  },
  // methods: {
  //   filterProjects(category) {
  //     this.currentCategory = category;
  //     // Lógica para filtrar proyectos
  //   },
  // },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.projects-page-section {
  padding: 6rem 2rem;
  background-color: darken(
    $color-dark-background,
    2%
  ); // Mismo fondo que la sección de proyectos en Home
  color: $color-light-text;
  min-height: 85vh;
  text-align: center;
}

.section-title {
  font-family: $font-heading;
  font-size: 3rem;
  color: $color-primary-accent;
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
  width: 100%;

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

.section-description {
  font-size: 1.1rem;
  color: $color-gray-text;
  max-width: 800px;
  margin: 0 auto 4rem;
  line-height: 1.7;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 3rem;
}

/* Estilos para la sección de filtros (si la descomentas) */
/*
.project-filters {
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;

  .filter-btn {
    background-color: lighten($color-dark-background, 8%);
    color: $color-gray-text;
    border: 1px solid lighten($color-dark-background, 15%);
    padding: 0.8rem 1.5rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:hover {
      background-color: $color-primary-accent;
      color: $color-light-text;
      border-color: $color-primary-accent;
    }
    &.active {
      background-color: $color-primary-accent;
      color: $color-light-text;
      border-color: $color-primary-accent;
      box-shadow: 0 4px 10px rgba($color-primary-accent, 0.3);
    }
  }
}


/* Media Queries para responsividad */
@media (max-width: 992px) {
  .projects-page-section {
    padding: 4rem 2rem;
  }
  .section-title {
    font-size: 2.5rem;
  }
  .section-description {
    font-size: 1rem;
    margin-bottom: 3rem;
  }
  .projects-grid {
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .projects-page-section {
    padding: 3rem 1.5rem;
  }
  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
