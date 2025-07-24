<template>
  <section class="projects-page-section">
    <div class="container">
      <h1 class="section-title" data-aos="fade-right">
        Mi Portafolio Completo
      </h1>
      <p class="section-description" data-aos="fade-left" data-aos-delay="100">
        Aquí encontrarás una selección de mis trabajos más recientes y proyectos
        destacados, que demuestran mi capacidad para transformar ideas en
        soluciones digitales funcionales e innovadoras.
      </p>

      <div class="filter-dropdown-wrapper">
        <button class="filter-dropdown-btn" @click="toggleDropdown">
          <i class="fas fa-filter"></i>
          <span>{{ filterSummary }}</span>
          <i
            class="fas fa-chevron-down chevron"
            :class="{ open: dropdownOpen }"
          ></i>
        </button>
        <transition name="fade">
          <div
            v-if="dropdownOpen"
            class="filter-dropdown-menu"
            ref="dropdownMenu"
          >
            <div class="dropdown-section">
              <div class="dropdown-title">Tecnologías</div>
              <label
                v-for="tech in technologies"
                :key="tech"
                class="dropdown-option"
              >
                <input
                  type="checkbox"
                  :value="tech"
                  v-model="currentTechnologies"
                  @change="onTechnologyChange"
                />
                <span>{{ tech }}</span>
              </label>
            </div>
            <div class="dropdown-actions">
              <button class="clear-btn" @click="clearFilters">Limpiar</button>
              <button class="close-btn" @click="closeDropdown">Cerrar</button>
            </div>
          </div>
        </transition>
      </div>

      <div class="projects-grid">
        <ProjectCard
          v-for="(project, idx) in filteredProjects"
          :key="project.title + idx"
          v-bind="project"
          :data-aos="idx % 2 === 0 ? 'zoom-in-up' : 'zoom-in-down'"
          :data-aos-delay="100 + idx * 100"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";

export default {
  name: "ProjectsView",
  components: {
    ProjectCard,
  },
  data() {
    return {
      currentTechnologies: [],
      dropdownOpen: false,
      projects: [
        {
          title: "Psicología & Bienestar",
          description:
            "Una plataforma enfocada en servicios de psicología individuales, entidades educativas y empresas.",
          image: require("@/assets/projects-images/psicobienestar.webp"),
          technologies: ["HTML", "NodeJS", "CSS", "JavaScript"],
          liveLink: "https://psicologiaybienestar.netlify.app/",
          category: "Fullstack",
        },
        {
          title: "IARegTech",
          description:
            "Aplicación web para la verificación en cuanto a la ética de la IA (GUIA)",
          image: require("@/assets/projects-images/iaregtech.webp"),
          technologies: ["MySQL", "Flask", "Python", "CRUD"],
          liveLink: "https://juandgomezr.github.io/IARegTech/",
          githubLink: "https://github.com/JuanDGomezR/IARegTech",
          category: "Fullstack",
        },
        {
          title: "LAPIBANDA",
          description:
            "Frontend basado en una api propia para la interacción con CRUD",
          image: require("@/assets/projects-images/lapiBanda.webp"),
          technologies: ["APIs", "HTML", "CSS", "JavaScript", "NodeJS"],
          liveLink: "https://juandgomezr.github.io/FRONTEND-LAPIBANDA/",
          githubLink: "https://github.com/JuanDGomezR/FRONTEND-LAPIBANDA",
          category: "Frontend",
        },
        {
          title: "PokéWiki",
          description: "Un proyecto sencillo sobre el mundo Pokémon.",
          image: require("@/assets/projects-images/pokewiki.webp"),
          technologies: ["HTML", "CSS", "JavaScript", "APIs"],
          liveLink: "https://juandgomezr.github.io/poke-wiki/",
          githubLink: "https://github.com/JuanDGomezR/poke-wiki",
          category: "Frontend",
        },
        {
          title: "Códigos JS",
          description: "Ejemplos de cuando aprendí a usar JavaScript.",
          image: require("@/assets/projects-images/JavaScript.webp"),
          technologies: ["JavaScript"],
          githubLink: "https://github.com/JuanDGomezR/Actividades-JS",
          category: "Frontend",
        },
        {
          title: "Noticias Geek",
          description:
            "Portal web para ver noticias de videojuegos, películas y tecnología de forma sencilla y rápida.",
          image: require("@/assets/projects-images/geekNews.webp"),
          technologies: ["HTML", "CSS", "JavaScript", "APIs"],
          liveLink: "https://juandgomezr.github.io/noticiasgeek/",
          githubLink: "https://github.com/JuanDGomezR/noticiasgeek",
          category: "Frontend",
        },
        {
          title: "Flower V1",
          description:
            "Proyecto web interactivo dedicado como detalle personal. Versión ligera.",
          image: require("@/assets/projects-images/flowerV1.webp"),
          technologies: ["HTML", "CSS", "JavaScript", "JSON"],
          liveLink: "https://juandgomezr.github.io/flower/",
          githubLink: "https://github.com/JuanDGomezR/flower",
          category: "Frontend",
        },
        {
          title: "Flower V2",
          description:
            "Versión avanzada visualmente del proyecto Flower. Esta versión consume un poco más de recursos.",
          image: require("@/assets/projects-images/flowerV2.webp"),
          technologies: ["HTML", "CSS", "JavaScript", "JSON"],
          liveLink: "https://juandgomezr.github.io/flower/in.html",
          githubLink: "https://github.com/JuanDGomezR/flower",
          category: "Frontend",
        },
      ],
    };
  },
  computed: {
    technologies() {
      const techSet = new Set();
      this.projects.forEach((p) =>
        p.technologies.forEach((t) => techSet.add(t))
      );
      // Ordenar alfabéticamente, ignorando mayúsculas/minúsculas
      return Array.from(techSet).sort((a, b) =>
        a.localeCompare(b, undefined, { sensitivity: "base" })
      );
    },
    filteredProjects() {
      let filtered = this.projects;
      if (this.currentTechnologies.length) {
        filtered = filtered.filter((p) =>
          p.technologies.some((tech) => this.currentTechnologies.includes(tech))
        );
      }
      return filtered;
    },
    filterSummary() {
      if (this.currentTechnologies.length) {
        return this.currentTechnologies.join(", ");
      }
      return "Todas";
    },
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
      if (this.dropdownOpen) {
        this.$nextTick(() => {
          document.addEventListener("mousedown", this.handleClickOutside);
        });
      } else {
        document.removeEventListener("mousedown", this.handleClickOutside);
      }
    },
    closeDropdown() {
      this.dropdownOpen = false;
      document.removeEventListener("mousedown", this.handleClickOutside);
    },
    handleClickOutside(e) {
      if (
        this.$refs.dropdownMenu &&
        !this.$refs.dropdownMenu.contains(e.target)
      ) {
        this.closeDropdown();
      }
    },
    onTechnologyChange() {
      // No hace falta lógica extra, v-model se encarga
    },
    clearFilters() {
      this.currentTechnologies = [];
      this.closeDropdown();
    },
  },
  beforeUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.projects-page-section {
  padding: 6rem 2rem;
  background-color: $color-dark-background;
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

.filter-dropdown-wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2.5rem;
  position: relative;
}

.filter-dropdown-btn {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  background: lighten($color-dark-background, 8%);
  color: $color-light-text;
  border: 1.5px solid lighten($color-dark-background, 15%);
  border-radius: 999px;
  padding: 0.7rem 1.6rem;
  font-size: 1.08rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba($color-primary-accent, 0.07);
  transition: all 0.22s cubic-bezier(0.4, 0.2, 0.2, 1), box-shadow 0.3s;
  outline: none;
  min-width: 160px;
  .chevron {
    transition: transform 0.3s;
    &.open {
      transform: rotate(180deg);
    }
  }
  &:hover {
    background: $color-primary-accent;
    color: $color-light-text;
    border-color: $color-primary-accent;
    box-shadow: 0 4px 16px rgba($color-primary-accent, 0.13);
  }
}

.filter-dropdown-menu {
  position: absolute;
  top: 110%;
  right: 0;
  min-width: 270px;
  background: $color-dark-background;
  color: $color-light-text;
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba($color-primary-accent, 0.18);
  border: 1.5px solid lighten($color-dark-background, 15%);
  z-index: 100;
  padding: 1.2rem 1.3rem 1rem 1.3rem;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  animation: fadeIn 0.25s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dropdown-section {
  margin-bottom: 0.2rem;
}
.dropdown-title {
  font-size: 0.98rem;
  font-weight: 600;
  color: $color-primary-accent;
  margin-bottom: 0.4rem;
}
.dropdown-option {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.97rem;
  margin-bottom: 0.2rem;
  cursor: pointer;
  position: relative;
  // Ocultar el checkbox nativo
  input[type="checkbox"] {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
  }
  // Checkbox personalizado
  span::before {
    content: "";
    display: inline-block;
    width: 1.15em;
    height: 1.15em;
    border: 2px solid $color-primary-accent;
    border-radius: 6px;
    background: lighten($color-dark-background, 10%);
    margin-right: 0.5em;
    vertical-align: middle;
    transition: background 0.2s, border-color 0.2s;
    box-sizing: border-box;
  }
  input[type="checkbox"]:checked + span::before {
    background: $color-primary-accent;
    border-color: $color-primary-accent;
    box-shadow: 0 0 0 2px rgba($color-primary-accent, 0.15);
  }
  input[type="checkbox"]:checked + span::after {
    content: "\2713";
    color: $color-light-text;
    font-size: 0.95em;
    position: absolute;
    left: 0.32em;
    top: 0.13em;
    pointer-events: none;
  }
  span {
    position: relative;
    padding-left: 0.1em;
    user-select: none;
  }
}
.dropdown-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.7rem;
  margin-top: 0.2rem;
}
.clear-btn,
.close-btn {
  background: transparent;
  color: $color-primary-accent;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0.2rem 0.7rem;
  border-radius: 6px;
  transition: background 0.2s, color 0.2s;
}
.clear-btn:hover,
.close-btn:hover {
  background: $color-primary-accent;
  color: $color-light-text;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 3rem;
}

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
