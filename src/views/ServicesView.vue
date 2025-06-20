<template>
  <section class="services-page-section">
    <div class="container">
      <h1 class="section-title" data-aos="fade-up">Mis Servicios Detallados</h1>
      <p class="section-description" data-aos="fade-up" data-aos-delay="100">
        Ofrezco una gama completa de servicios de desarrollo web, diseñados para
        ayudarte a construir una presencia digital impactante y funcional.
      </p>

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
        <ServiceItem
          :delay="100"
          iconClass="fas fa-toolbox"
          title="Mantenimiento Preventivo"
          description="Instalación, mantenimiento y configuración de las aplicaciones que más necesites en tu dispositivo."
        />
        <ServiceItem
          :delay="200"
          iconClass="fas fa-bug"
          title="Mantenimiento y Soporte Continuo"
          description="Ofrezco soporte post-lanzamiento, actualizaciones de seguridad, resolución de errores y mejoras continuas para tu aplicación."
        />
        <ServiceItem
          :delay="300"
          iconClass="fas fa-tools"
          title="Consultoría Tecnológica"
          description="Asesoramiento experto en la elección de tecnologías, arquitectura de software y estrategias de desarrollo para tu proyecto."
        />
      </div>
    </div>
  </section>
</template>

<script>
import ServiceItem from "@/components/ServiceItem.vue"; // Importa el componente ServiceItem

export default {
  name: "ServicesView",
  components: {
    ServiceItem, // Registra el componente
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.services-page-section {
  padding: 6rem 2rem;
  background-color: $color-dark-background;
  color: $color-light-text;
  min-height: 85vh; // Asegura que tenga altura suficiente para el footer
  text-align: center;
}

.section-title {
  font-family: $font-heading;
  font-size: 3rem;
  color: $color-primary-accent;
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
  width: 100%; // Para centrar el after

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

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem; // Espacio entre las tarjetas de servicio
}

/* Media Queries para responsividad */
@media (max-width: 992px) {
  .services-page-section {
    padding: 4rem 2rem;
  }
  .section-title {
    font-size: 2.5rem;
  }
  .section-description {
    font-size: 1rem;
    margin-bottom: 3rem;
  }
  .services-grid {
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .services-page-section {
    padding: 3rem 1.5rem;
  }
  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  .services-grid {
    grid-template-columns: 1fr; // Una columna en móvil
    gap: 1.5rem;
  }
}
</style>
