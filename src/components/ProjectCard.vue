<template>
  <div class="project-card">
    <div class="project-image-wrapper">
      <img :src="image" :alt="title" class="project-image" />
      <div class="image-overlay">
        <a
          :href="liveLink"
          target="_blank"
          rel="noopener noreferrer"
          class="overlay-link"
        >
          Ver Proyecto <i class="fas fa-external-link-alt"></i>
        </a>
        <a
          v-if="githubLink"
          :href="githubLink"
          target="_blank"
          rel="noopener noreferrer"
          class="overlay-link"
        >
          GitHub <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
    <div class="project-info">
      <h3 class="project-title">{{ title }}</h3>
      <p class="project-description">{{ description }}</p>
      <div class="project-tech">
        <span v-for="tech in technologies" :key="tech" class="tech-tag">{{
          tech
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      // Ruta a la imagen del proyecto, ej: require('@/assets/project1.jpg')
      type: String,
      required: true,
    },
    technologies: {
      type: Array,
      default: () => [],
    },
    liveLink: {
      type: String,
      required: true,
    },
    githubLink: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.project-card {
  background-color: lighten($color-dark-background, 5%);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 25px rgba($color-primary-accent, 0.3);
  }
}

.project-image-wrapper {
  position: relative;
  height: 200px;
  overflow: hidden;

  .project-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background-color: #000;
    display: block;
    transition: transform 0.4s ease;
  }

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color-primary-accent, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 2;
  }

  &:hover .project-image {
    transform: scale(1.08);
  }

  &:hover .image-overlay {
    opacity: 1;
  }
}

.overlay-link {
  color: $color-light-text;
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  margin: 0.5rem;
  border: 2px solid $color-light-text;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;

  i {
    margin-left: 8px;
  }

  &:hover {
    background-color: $color-light-text;
    color: $color-primary-accent;
  }
}

.project-info {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.project-title {
  font-family: $font-heading;
  font-size: 1.6rem;
  color: $color-light-text;
  margin-bottom: 0.8rem;
}

.project-description {
  font-size: 0.95rem;
  color: $color-gray-text;
  line-height: 1.5;
  margin-bottom: 1rem;
  flex-grow: 1;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tech-tag {
  background-color: rgba($color-primary-accent, 0.2);
  color: $color-primary-accent;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: bold;
}

@media (max-width: 768px) {
  .project-card {
    margin-bottom: 1.5rem;
  }
  .project-title {
    font-size: 1.4rem;
  }
  .project-description {
    font-size: 0.9rem;
  }
  .overlay-link {
    font-size: 1rem;
    padding: 0.7rem 1.2rem;
  }
}
</style>
