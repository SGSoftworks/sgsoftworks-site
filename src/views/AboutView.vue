<template>
  <section class="about-section">
    <div class="container">
      <h1 class="section-title" data-aos="fade-up">Sobre Mí</h1>
      <div class="about-content">
        <div
          class="about-image-wrapper"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <img
            src="@/assets/profile.jpg"
            alt="Tu Foto de Perfil"
            class="profile-image"
          />
        </div>
        <div class="about-text" data-aos="fade-left" data-aos-delay="300">
          <p>
            ¡Hola! Soy <span>Juan David</span>, un apasionado desarrollador web
            con sede en Soacha, Cundinamarca, Colombia. Mi viaje en el mundo del
            desarrollo comenzó con una curiosidad insaciable por cómo funcionan
            las cosas en la web y cómo se pueden construir experiencias
            digitales asombrosas.
          </p>
          <p>
            Especializado en el desarrollo <span>Frontend</span> con un enfoque
            particular en <span>Vue.js</span> y <span>Sass</span>, me dedico a
            transformar diseños complejos en interfaces de usuario intuitivas y
            de alto rendimiento. Me encanta el desafío de crear sitios web
            responsivos, accesibles y visualmente atractivos.
          </p>
          <p>
            Pero mi interés no se limita solo al Frontend. También tengo
            experiencia en <span>Backend</span>, lo que me permite entender la
            arquitectura completa de una aplicación y construir soluciones
            robustas de principio a fin. Me apasiona resolver problemas y
            aprender constantemente nuevas tecnologías para entregar soluciones
            innovadoras y eficientes.
          </p>
          <p>
            Fuera del código, disfruto de jugar videojuegos, reparar
            computadoras, ver series divertidas, salir con amigos o pareja,
            etc... Creemos juntos tu próxima gran idea.
          </p>
          <router-link to="/contacto" class="btn btn-primary cta-button">
            ¡Hablemos de tu Proyecto! <i class="fas fa-comments"></i>
          </router-link>
        </div>
      </div>

      <div class="skills-section">
        <h2 class="section-subtitle" data-aos="fade-up">
          Mis Habilidades Clave
        </h2>
        <div class="skills-grid">
          <div class="skill-item" data-aos="zoom-in" data-aos-delay="100">
            <i class="fab fa-html5"></i>
            <span>HTML5</span>
          </div>
          <div class="skill-item" data-aos="zoom-in" data-aos-delay="200">
            <i class="fab fa-css3-alt"></i>
            <span>CSS3 / Sass</span>
          </div>
          <div class="skill-item" data-aos="zoom-in" data-aos-delay="300">
            <i class="fab fa-js-square"></i>
            <span>JavaScript (ES6+)</span>
          </div>
          <div class="skill-item" data-aos="zoom-in" data-aos-delay="400">
            <i class="fab fa-vuejs"></i>
            <span>Vue.js</span>
          </div>
          <div class="skill-item" data-aos="zoom-in" data-aos-delay="500">
            <i class="fab fa-node-js"></i>
            <span>Node.js</span>
          </div>
          <div class="skill-item" data-aos="zoom-in" data-aos-delay="600">
            <i class="fas fa-database"></i>
            <span>Bases de Datos</span>
          </div>
          <div class="skill-item" data-aos="zoom-in" data-aos-delay="700">
            <i class="fab fa-git-alt"></i>
            <span>Git / GitHub</span>
          </div>
          <div class="skill-item" data-aos="zoom-in" data-aos-delay="700">
            <i class="fab fa-python"></i>
            <span>Python</span>
          </div>
          <div class="skill-item" data-aos="zoom-in" data-aos-delay="800">
            <i class="fas fa-laptop-code"></i>
            <span>Responsive Design</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutView",
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.about-section {
  padding: 6rem 2rem;
  background-color: $color-dark-background;
  color: $color-light-text;
  min-height: 85vh;
}

.section-title {
  font-family: $font-heading;
  font-size: 3rem;
  color: $color-primary-accent;
  margin-bottom: 4rem;
  text-align: center;
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

.about-content {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
}

.about-image-wrapper {
  flex: 1;
  max-width: 400px;
  text-align: center;
  .profile-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 8px 20px rgba($color-dark-background, 0.6);
    border: 3px solid $color-primary-accent;
  }
}

.about-text {
  flex: 2;
  max-width: 700px;
  font-size: 1.1rem;
  line-height: 1.8;
  p {
    margin-bottom: 1.5rem;
    color: $color-gray-text;
    span {
      color: $color-primary-accent;
      font-weight: bold;
    }
  }
}

.cta-button {
  margin-top: 2.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  border-radius: 50px;
  background-color: $color-primary-accent;
  color: $color-light-text;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba($color-primary-accent, 0.3);

  i {
    margin-left: 10px;
    font-size: 1.3rem;
  }

  &:hover {
    background-color: darken($color-primary-accent, 10%);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba($color-primary-accent, 0.4);
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }
}

.skills-section {
  text-align: center;
  padding-top: 4rem;
  border-top: 1px solid rgba($color-light-text, 0.1);
}

.section-subtitle {
  font-family: $font-heading;
  font-size: 2.5rem;
  color: $color-light-text;
  margin-bottom: 3rem;
  span {
    color: $color-primary-accent;
  }
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
  justify-items: center;
}

.skill-item {
  background-color: lighten($color-dark-background, 8%);
  border-radius: 8px;
  padding: 1.5rem 1rem;
  width: 100%;
  max-width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  i {
    font-size: 3rem;
    color: $color-primary-accent;
    margin-bottom: 0.8rem;
  }
  span {
    font-weight: bold;
    color: $color-light-text;
    font-size: 1rem;
  }

  &:hover {
    transform: translateY(-5px) scale(1.03);
    box-shadow: 0 5px 15px rgba($color-primary-accent, 0.2);
  }
}

@media (max-width: 992px) {
  .about-content {
    flex-direction: column;
    text-align: center;
    .about-image-wrapper {
      margin-bottom: 2rem;
    }
  }
  .section-title {
    font-size: 2.5rem;
  }
  .section-subtitle {
    font-size: 2rem;
  }
  .about-text {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .about-section {
    padding: 4rem 1.5rem;
  }
  .section-title {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
  .section-subtitle {
    font-size: 1.8rem;
  }
  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1rem;
  }
  .skill-item {
    i {
      font-size: 2.5rem;
    }
    span {
      font-size: 0.9rem;
    }
  }
}
</style>
