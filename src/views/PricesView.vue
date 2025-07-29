<template>
  <section class="prices-section">
    <div class="container">
      <h1 class="section-title" data-aos="fade-up">
        Nuestros Servicios y Precios
      </h1>
      <p class="prices-intro" data-aos="fade-up" data-aos-delay="100">
        Explora nuestros paquetes diseñados para impulsar tus proyectos y
        soluciones tecnológicas.<br />
        Todos los precios están en <strong>USD</strong> con una referencia
        aproximada en <strong>Pesos Colombianos (COP)</strong>, sujetos a la
        variación del mercado.
      </p>

      <div class="discounts-info" data-aos="fade-up" data-aos-delay="150">
        <p>
          🌟 **¡Ofertas Especiales!** Puedes aplicar descuentos significativos
          por la contratación de combos de servicios o por pagos anticipados.
          Contáctanos para más detalles sobre cómo optimizar tu inversión.
        </p>
        <p class="payment-methods-text">
          Facilitamos tus pagos a través de:
          <span class="payment-icons">
            <i class="fab fa-paypal"></i>
            <img src="/img/nequi-logo.png" alt="Nequi" class="nequi-icon" />
          </span>
          para tu comodidad.
        </p>
      </div>

      <div class="prices-grid">
        <div class="price-card" data-aos="fade-up" data-aos-delay="200">
          <h3>Plan Esencial</h3>
          <p class="plan-description">
            Ideal para emprendedores que necesitan una presencia online rápida y
            simple.
          </p>
          <div class="price-display">
            <p class="price-usd">$150 USD</p>
            <p class="price-cop">
              ~ {{ formatCurrency(convertUsdToCop(150)) }} COP
            </p>
          </div>
          <ul>
            <li>
              <i class="fas fa-check"></i> Diseño responsive (PC, móvil, tablet)
            </li>
            <li>
              <i class="fas fa-check"></i> Hasta 3 secciones o páginas estáticas
            </li>
            <li>
              <i class="fas fa-check"></i> Formulario de contacto funcional
              (Formspree, Google Forms, etc)
            </li>
            <li>
              <i class="fas fa-check"></i> Página con contenido informativo o de
              presentación
            </li>
          </ul>
          <div class="card-buttons">
            <button
              @click="openWhatsApp('Plan Esencial')"
              class="btn btn-whatsapp"
            >
              WhatsApp <i class="fab fa-whatsapp"></i>
            </button>
            <button
              @click="openEmailModal('Plan Esencial')"
              class="btn btn-email"
            >
              Correo <i class="fas fa-envelope"></i>
            </button>
          </div>
        </div>

        <div
          class="price-card featured"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h3>Plan Avanzado</h3>
          <p class="plan-description">
            Perfecto para marcas personales o pequeñas empresas con más
            contenido y funcionalidad.
          </p>
          <div class="price-display">
            <p class="price-usd">$300 USD</p>
            <p class="price-cop">
              ~ {{ formatCurrency(convertUsdToCop(300)) }} COP
            </p>
          </div>
          <ul>
            <li><i class="fas fa-check"></i> Todo lo del Plan Esencial</li>
            <li>
              <i class="fas fa-check"></i> Hasta 6 secciones/páginas (ejemplo:
              Inicio, Nosotros, Servicios, Contacto, Portafolio, etc.)
            </li>
            <li><i class="fas fa-check"></i> Navegación fluida entre vistas</li>
            <li>
              <i class="fas fa-check"></i> Animaciones básicas e interactividad
              (Vue o JS)
            </li>
            <li>
              <i class="fas fa-check"></i> Hosting básico y publicación en
              GitHub Pages o Netlify
            </li>
            <li><i class="fas fa-check"></i> Soporte 1 mes</li>
          </ul>
          <div class="card-buttons">
            <button
              @click="openWhatsApp('Plan Avanzado')"
              class="btn btn-whatsapp"
            >
              WhatsApp <i class="fab fa-whatsapp"></i>
            </button>
            <button
              @click="openEmailModal('Plan Avanzado')"
              class="btn btn-email"
            >
              Correo <i class="fas fa-envelope"></i>
            </button>
          </div>
        </div>

        <div class="price-card" data-aos="fade-up" data-aos-delay="400">
          <h3>Plan Pro a Medida</h3>
          <p class="plan-description">
            Para quienes quieren algo personalizado y funcional con tecnología
            moderna y características avanzadas.
          </p>
          <div class="price-display">
            <p class="price-usd">$500 USD</p>
            <p class="price-cop">
              ~ {{ formatCurrency(convertUsdToCop(500)) }} COP
            </p>
          </div>
          <ul>
            <li>
              <i class="fas fa-check"></i> Desarrollo completo desde cero con
              HTML/CSS o Vue/React
            </li>
            <li>
              <i class="fas fa-check"></i> Páginas ilimitadas (dentro del
              alcance acordado)
            </li>
            <li>
              <i class="fas fa-check"></i> Consumo de APIs (ej: clima, noticias,
              datos públicos, etc.)
            </li>
            <li>
              <i class="fas fa-check"></i> Componentes reutilizables, SPA o
              diseño modular
            </li>
            <li>
              <i class="fas fa-check"></i> Soporte técnico personalizado por 2
              meses
            </li>
          </ul>
          <div class="card-buttons">
            <button
              @click="openWhatsApp('Plan Pro a Medida')"
              class="btn btn-whatsapp"
            >
              WhatsApp <i class="fab fa-whatsapp"></i>
            </button>
            <button
              @click="openEmailModal('Plan Pro a Medida')"
              class="btn btn-email"
            >
              Correo <i class="fas fa-envelope"></i>
            </button>
          </div>
        </div>

        <div class="price-card" data-aos="fade-up" data-aos-delay="500">
          <h3>Soporte Básico (software)</h3>
          <p class="plan-description">
            Soluciones rápidas para tus necesidades de software diarias.
          </p>
          <div class="price-display">
            <p class="price-usd">$25 USD / visita</p>
            <p class="price-cop">
              ~ {{ formatCurrency(convertUsdToCop(25)) }} COP / visita
            </p>
          </div>
          <ul>
            <li><i class="fas fa-check"></i> Diagnóstico de problemas</li>
            <li>
              <i class="fas fa-check"></i> Limpieza de software innecesario
            </li>
            <li>
              <i class="fas fa-check"></i> Instalación y actualización de
              programas o drivers
            </li>
            <li>
              <i class="fas fa-check"></i> Optimización básica del sistema
            </li>
            <li>
              <i class="fas fa-check"></i> Soporte remoto hasta 1 hora
              (Opcional)
            </li>
          </ul>
          <div class="card-buttons">
            <button
              @click="openWhatsApp('Soporte Básico')"
              class="btn btn-whatsapp"
            >
              WhatsApp <i class="fab fa-whatsapp"></i>
            </button>
            <button
              @click="openEmailModal('Soporte Básico')"
              class="btn btn-email"
            >
              Correo <i class="fas fa-envelope"></i>
            </button>
          </div>
        </div>

        <div class="price-card" data-aos="fade-up" data-aos-delay="600">
          <h3>Soporte Intermedio</h3>
          <p class="plan-description">
            Servicio integral para la configuración y mantenimiento de tu
            sistema operativo.
          </p>
          <div class="price-display">
            <p class="price-usd">$50 USD / visita</p>
            <p class="price-cop">
              ~ {{ formatCurrency(convertUsdToCop(50)) }} COP / visita
            </p>
          </div>
          <ul>
            <li><i class="fas fa-check"></i> Todo lo básico, más:</li>
            <li>
              <i class="fas fa-check"></i> Instalación de sistema operativo
              (Windows)
            </li>
            <li>
              <i class="fas fa-check"></i> Instalación de suites completas
              (Office, edición básica, etc.)
            </li>
            <li>
              <i class="fas fa-check"></i> Configuración de cuentas,
              navegadores, impresoras, etc.
            </li>
            <li><i class="fas fa-check"></i> Soporte extendido (hasta 2h)</li>
          </ul>
          <div class="card-buttons">
            <button
              @click="openWhatsApp('Soporte Intermedio')"
              class="btn btn-whatsapp"
            >
              WhatsApp <i class="fab fa-whatsapp"></i>
            </button>
            <button
              @click="openEmailModal('Soporte Intermedio')"
              class="btn btn-email"
            >
              Correo <i class="fas fa-envelope"></i>
            </button>
          </div>
        </div>

        <div class="price-card" data-aos="fade-up" data-aos-delay="700">
          <h3>Soporte Premium (bajo disponibilidad)</h3>
          <p class="plan-description">
            Asesoría experta y configuración avanzada para usuarios exigentes.
          </p>
          <div class="price-display">
            <p class="price-usd">$90 USD / visita</p>
            <p class="price-cop">
              ~ {{ formatCurrency(convertUsdToCop(90)) }} COP / visita
            </p>
          </div>
          <ul>
            <li><i class="fas fa-check"></i> Todo lo intermedio, más:</li>
            <li>
              <i class="fas fa-check"></i> Configuración avanzada de software o
              redes locales
            </li>
            <li>
              <i class="fas fa-check"></i> Asesoría personalizada para uso de
              software o trabajo remoto
            </li>
            <li>
              <i class="fas fa-check"></i> Soporte remoto prioritario en los
              siguientes 7 días
            </li>
            <li>
              <i class="fas fa-xmark nota"></i> Nota: No incluye cambios o
              reparación de hardware físico.
            </li>
          </ul>
          <div class="card-buttons">
            <button
              @click="openWhatsApp('Soporte Premium')"
              class="btn btn-whatsapp"
            >
              WhatsApp <i class="fab fa-whatsapp"></i>
            </button>
            <button
              @click="openEmailModal('Soporte Premium')"
              class="btn btn-email"
            >
              Correo <i class="fas fa-envelope"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="location-disclaimer" data-aos="fade-up" data-aos-delay="800">
        <p>
          <i class="fas fa-map-marker-alt"></i> Los servicios
          <strong>presenciales</strong> están disponibles exclusivamente en la
          ciudad de <strong>Bogotá D.C.</strong> y el municipio de
          <Strong>Soacha</Strong>, Colombia.
        </p>
        <p>
          Para otras ubicaciones, ofrecemos soporte y desarrollo de forma
          remota.
        </p>
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
import EmailModal from "@/components/EmailModal.vue";
import axios from "axios";

export default {
  name: "PricesView",
  components: {
    EmailModal,
  },
  data() {
    return {
      isEmailModalVisible: false,
      emailSubject: "",
      predefinedEmailMessage: "",
      whatsappPhoneNumber: "573219177602",
      exchangeRateUsdToCop: 0,
    };
  },
  mounted() {
    this.fetchExchangeRate();
  },
  methods: {
    openWhatsApp(packageName) {
      const message = encodeURIComponent(
        `Hola, me interesa el servicio de ${packageName}. ¿Podrías darme más información?`
      );
      window.open(
        `https://wa.me/${this.whatsappPhoneNumber}?text=${message}`,
        "_blank"
      );
    },
    openEmailModal(packageName) {
      this.emailSubject = `Consulta sobre ${packageName}`;
      this.predefinedEmailMessage = `Hola, me gustaría saber más sobre el servicio de ${packageName}.`;
      this.isEmailModalVisible = true;
    },
    async fetchExchangeRate() {
      try {
        const response = await axios.get(
          "https://api.frankfurter.app/latest?from=USD&to=COP"
        );

        if (response.data && response.data.rates && response.data.rates.COP) {
          this.exchangeRateUsdToCop = response.data.rates.COP;
          console.log(
            "Tasa de cambio USD a COP (Frankfurter):",
            this.exchangeRateUsdToCop
          );
        } else {
          console.warn(
            "Datos de tasa de cambio inesperados. Usando valor por defecto."
          );
          this.exchangeRateUsdToCop = 4000;
        }
      } catch (error) {
        console.error("Error al obtener la tasa de cambio:", error);
        this.exchangeRateUsdToCop = 4000;
      }
    },
    convertUsdToCop(usdAmount) {
      return usdAmount * this.exchangeRateUsdToCop;
    },
    formatCurrency(amount, currencyCode = "COP") {
      const options = {
        style: "currency",
        currency: currencyCode,
        minimumFractionDigits: 0,
        maximumFractionDigits: currencyCode === "COP" ? 0 : 2,
      };
      const locale = currencyCode === "COP" ? "es-CO" : "en-US";
      return new Intl.NumberFormat(locale, options).format(amount);
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
  margin: 0 auto 2rem;
  line-height: 1.7;
  strong {
    color: $color-light-text;
    font-weight: bold;
  }
}

.discounts-info {
  background-color: lighten($color-dark-background, 8%);
  border: 1px solid $color-primary-accent;
  border-radius: 8px;
  padding: 1.5rem 2rem;
  margin: 0 auto 4rem;
  max-width: 800px;
  text-align: center;
  p {
    font-size: 1rem;
    color: $color-light-text;
    margin-bottom: 0.5rem;
    &:last-child {
      margin-bottom: 0;
    }
    strong {
      color: $color-primary-accent;
    }
  }
  .payment-methods-text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    .payment-icons {
      display: flex;
      align-items: center;
      gap: 10px;
      i {
        font-size: 1.5em;
        color: $color-light-text;
      }
      .fa-paypal {
        color: #0070ba;
      }
      .nequi-icon {
        height: 1.5em;
        vertical-align: middle;
      }
    }
  }
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
    transform: translateY(-15px) scale(1.02);
    .price-usd {
      color: $color-primary-accent;
      font-size: 3.2rem;
    }
  }

  h3 {
    font-family: $font-heading;
    font-size: 2.2rem;
    color: $color-light-text;
    margin-bottom: 1.5rem;
  }

  .plan-description {
    font-size: 0.95rem;
    color: $color-gray-text;
    margin-bottom: 1.5rem;
    min-height: 40px;
  }

  .price-display {
    margin-bottom: 1.5rem;
  }

  .price-usd {
    font-family: $font-heading;
    font-size: 2.5rem;
    color: $color-light-text;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .price-cop {
    font-family: $font-body;
    font-size: 1.2rem;
    color: $color-gray-text;
    font-weight: normal;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 2rem;
    text-align: left;
    flex-grow: 1;
    li {
      font-size: 1rem;
      color: $color-gray-text;
      margin-bottom: 0.8rem;
      position: relative;
      padding-left: 25px;
      i {
        font-size: 1.1rem;
        color: $color-success;
        position: absolute;
        left: 0;
        top: 3px;
      }
    }
  }
  .nota {
    font-size: 1.1rem;
    color: $color-error;
    position: absolute;
    left: 0;
    top: 3px;
  }

  .card-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: auto;
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
    border: none;
  }

  .btn-whatsapp {
    background-color: #25d366;
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
    background-color: $color-primary-accent;
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

.location-disclaimer {
  background-color: lighten($color-dark-background, 5%);
  border: 1px solid $color-gray-text;
  border-radius: 8px;
  padding: 1.5rem 2rem;
  margin: 4rem auto 2rem;
  max-width: 800px;
  text-align: center;
  p {
    font-size: 0.95rem;
    color: $color-gray-text;
    margin-bottom: 0.5rem;
    &:last-child {
      margin-bottom: 0;
    }
    strong {
      color: $color-light-text;
    }
    i {
      margin-right: 8px;
      color: $color-primary-accent;
    }
  }
}
@media (max-width: 992px) {
  .prices-grid {
    grid-template-columns: 1fr;
  }
  .price-card {
    margin: 0 auto;
    max-width: 400px;
  }
  .price-card.featured {
    transform: translateY(0) scale(1);
  }
}

@media (max-width: 768px) {
  .prices-section {
    padding: 4rem 1.5rem;
  }
  .section-title {
    font-size: 2.5rem;
  }
  .prices-intro,
  .discounts-info,
  .location-disclaimer {
    font-size: 0.9rem;
    margin-bottom: 2rem;
    padding: 1rem 1.5rem;
  }
  .price-card {
    padding: 2rem;
    h3 {
      font-size: 1.8rem;
    }
    .price-usd {
      font-size: 2.5rem;
    }
    .payment-methods-text .payment-icons {
      flex-direction: row;
      margin-top: 5px;
    }
  }
}
</style>
