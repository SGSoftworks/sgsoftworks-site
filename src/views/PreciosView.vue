<template>
  <section class="prices-section">
    <div class="container">
      <h1 class="section-title" data-aos="fade-up">Nuestros Servicios y Precios</h1>
      <p class="prices-intro" data-aos="fade-up" data-aos-delay="100">
        Explora nuestros paquetes diseñados para impulsar tus proyectos.
      </p>

      <div class="prices-grid">
        <div class="price-card" data-aos="fade-up" data-aos-delay="200">
          <h3>Paquete Básico</h3>
          <p class="price">$500 USD</p>
          <ul>
            <li><i class="fas fa-check"></i> Diseño Responsivo</li>
            <li><i class="fas fa-check"></i> Hasta 3 Páginas</li>
            <li><i class="fas fa-check"></i> Integración de Formulario Básico</li>
            <li><i class="fas fa-check"></i> Soporte 1 Mes</li>
          </ul>
          <div class="card-buttons">
            <button @click="openWhatsApp('Paquete Básico')" class="btn btn-whatsapp">
              WhatsApp <i class="fab fa-whatsapp"></i>
            </button>
            <button @click="openEmailModal('Paquete Básico')" class="btn btn-email">
              Correo <i class="fas fa-envelope"></i>
            </button>
          </div>
        </div>

        <div class="price-card featured" data-aos="fade-up" data-aos-delay="300">
          <h3>Paquete Estándar</h3>
          <p class="price">$1200 USD</p>
          <ul>
            <li><i class="fas fa-check"></i> Diseño Personalizado Avanzado</li>
            <li><i class="fas fa-check"></i> Hasta 8 Páginas</li>
            <li><i class="fas fa-check"></i> Sistema de Gestión de Contenido (CMS) Básico</li>
            <li><i class="fas fa-check"></i> Integración de Pasarela de Pago</li>
            <li><i class="fas fa-check"></i> Soporte 3 Meses</li>
          </ul>
          <div class="card-buttons">
            <button @click="openWhatsApp('Paquete Estándar')" class="btn btn-whatsapp">
              WhatsApp <i class="fab fa-whatsapp"></i>
            </button>
            <button @click="openEmailModal('Paquete Estándar')" class="btn btn-email">
              Correo <i class="fas fa-envelope"></i>
            </button>
          </div>
        </div>

        <div class="price-card" data-aos="fade-up" data-aos-delay="400">
          <h3>Paquete Premium</h3>
          <p class="price">$2500 USD</p>
          <ul>
            <li><i class="fas fa-check"></i> Desarrollo a Medida</li>
            <li><i class="fas fa-check"></i> Número de Páginas Ilimitado</li>
            <li><i class="fas fa-check"></i> CMS Personalizado</li>
            <li><i class="fas fa-check"></i> Integración de API Compleja</li>
            <li><i class="fas fa-check"></i> Soporte Prioritario 6 Meses</li>
          </ul>
          <div class="card-buttons">
            <button @click="openWhatsApp('Paquete Premium')" class="btn btn-whatsapp">
              WhatsApp <i class="fab fa-whatsapp"></i>
            </button>
            <button @click="openEmailModal('Paquete Premium')" class="btn btn-email">
              Correo <i class="fas fa-envelope"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <EmailModal
      :isVisible="isEmailModalVisible"
      :subject="emailSubject"
      :predefinedMessage="predefinedEmailMessage"
      @close="isEmailModalVisible = false"
    />
  </section>
</template>

<script>
import EmailModal from '@/components/EmailModal.vue'; // Importa el nuevo componente modal

export default {
  name: 'PreciosView',
  components: {
    EmailModal
  },
  data() {
    return {
      isEmailModalVisible: false,
      emailSubject: '',
      predefinedEmailMessage: '',
      whatsappPhoneNumber: '573219177602', // Tu número de WhatsApp sin el '+'
    };
  },
  methods: {
    openWhatsApp(packageName) {
      const message = encodeURIComponent(`Hola, me interesa el ${packageName}. ¿Podrías darme más información?`);
      window.open(`https://wa.me/${this.whatsappPhoneNumber}?text=${message}`, '_blank');
    },
    openEmailModal(packageName) {
      this.emailSubject = `Consulta sobre el ${packageName}`;
      this.predefinedEmailMessage = `Hola, me gustaría saber más sobre el ${packageName}.`;
      this.isEmailModalVisible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.prices-section {
  padding: 6rem 2rem;
  background-color: $color-dark-background;
  color: $color-light-text;
  min-height: 85vh;
}

.section-title {
  font-family: $font-heading;
  font-size: 3rem;
  color: $color-primary-accent;
  margin-bottom: 2rem;
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

.prices-intro {
  text-align: center;
  font-size: 1.1rem;
  color: $color-gray-text;
  max-width: 800px;
  margin: 0 auto 4rem;
  line-height: 1.7;
}

.prices-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  justify-content: center;
}

.price-card {
  background-color: lighten($color-dark-background, 5%);
  border-radius: 10px;
  padding: 2.5rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba($color-primary-accent, 0.4);
  }

  &.featured {
    border: 3px solid $color-primary-accent;
    background-color: lighten($color-dark-background, 8%);
    transform: translateY(-15px) scale(1.02); /* Más destacado */
    .price {
        color: $color-primary-accent; // Usando tu color de acento principal para destacar el precio
        font-size: 3.2rem;
    }
  }

  h3 {
    font-family: $font-heading;
    font-size: 2.2rem;
    color: $color-light-text;
    margin-bottom: 1.5rem;
  }

  .price {
    font-family: $font-heading;
    font-size: 2.8rem;
    color: $color-light-text; // Color por defecto, será cambiado por featured si aplica
    margin-bottom: 1.5rem;
    font-weight: bold;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 2rem;
    text-align: left;
    li {
      font-size: 1rem;
      color: $color-gray-text;
      margin-bottom: 0.8rem;
      position: relative;
      padding-left: 25px;
      i { // Icono de Font Awesome para el check
        font-size: 1.1rem;
        color: $color-success;
        position: absolute;
        left: 0;
        top: 3px; // Ajusta si el icono no se alinea bien
      }
    }
  }

  .card-buttons {
    display: flex;
    flex-direction: column; // Botones apilados
    gap: 1rem;
    margin-top: auto; // Empuja los botones hacia abajo
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 1.5rem;
    border-radius: 5px;
    font-size: 1.1rem;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
    border: none; // Asegúrate de que no tengan bordes por defecto
  }

  .btn-whatsapp {
    background-color: #25d366; /* Color de WhatsApp */
    color: white;
    &:hover {
      background-color: darken(#25d366, 10%);
      transform: translateY(-3px);
    }
    i {
      margin-left: 10px;
    }
  }

  .btn-email {
    background-color: $color-primary-accent; /* Tu color de acento */
    color: $color-light-text;
    border: 2px solid $color-primary-accent;
    &:hover {
      background-color: darken($color-primary-accent, 10%);
      transform: translateY(-3px);
    }
    i {
      margin-left: 10px;
    }
  }
}

/* Media Queries */
@media (max-width: 992px) {
  .prices-grid {
    grid-template-columns: 1fr;
  }
  .price-card {
    margin: 0 auto;
    max-width: 400px;
  }
  .price-card.featured {
    transform: translateY(0) scale(1); // Desactiva el transform para destacado en móvil si es mucho
  }
}

@media (max-width: 768px) {
  .prices-section {
    padding: 4rem 1.5rem;
  }
  .section-title {
    font-size: 2.5rem;
  }
  .prices-intro {
    font-size: 1rem;
    margin-bottom: 3rem;
  }
  .price-card {
    padding: 2rem;
    h3 {
      font-size: 1.8rem;
    }
    .price {
      font-size: 2.5rem;
    }
  }
}
</style>