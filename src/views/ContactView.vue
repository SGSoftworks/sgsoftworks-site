<template>
  <section class="contact-section">
    <div class="container">
      <h1 class="section-title" data-aos="fade-up">Hablemos</h1>
      <p class="contact-intro" data-aos="fade-up" data-aos-delay="100">
        ¿Tienes una idea, un proyecto en mente o simplemente quieres saludar?
        ¡No dudes en contactarme! Estoy siempre abierto a nuevas oportunidades y
        colaboraciones interesantes.
      </p>

      <div class="contact-grid">
        <div class="contact-info" data-aos="fade-right" data-aos-delay="200">
          <h3>Información de Contacto</h3>
          <ul>
            <li>
              <i class="fas fa-envelope"></i>
              <a href="mailto:juan.dev1809@gmail.com">juan.dev1809@gmail.com</a>
            </li>
            <li>
              <i class="fas fa-phone"></i>
              <a href="tel:+573219177602">+57 321 917 7602</a>
            </li>
            <li>
              <i class="fas fa-map-marker-alt"></i>
              <span>Soacha, Cundinamarca, Colombia</span>
            </li>
          </ul>

          <div class="social-links">
            <a
              href="https://www.linkedin.com/in/juan-david-gomez-84a47b25a/"
              target="_blank"
              rel="noopener noreferrer"
              class="social-icon"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/JuanDGomezR"
              target="_blank"
              rel="noopener noreferrer"
              class="social-icon"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              href="http://wa.me/573219177602"
              target="_blank"
              rel="noopener noreferrer"
              class="social-icon"
            >
              <i class="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        <div class="contact-form" data-aos="fade-left" data-aos-delay="300">
          <h3>Envíame un Mensaje</h3>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Nombre:</label>
              <input type="text" id="name" v-model="form.name" required />
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" v-model="form.email" required />
            </div>

            <div class="form-group">
              <label for="phone">Teléfono / WhatsApp :</label>
              <input type="tel" id="phone" v-model="form.phone" required />
            </div>

            <div class="form-group">
              <label for="subject">Asunto:</label>
              <input type="text" id="subject" v-model="form.subject" required />
            </div>
            <div class="form-group">
              <label for="message">Mensaje:</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="6"
                required
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary" :disabled="loading">
              {{ loading ? "Enviando..." : "Enviar Mensaje" }}
              <i v-if="!loading" class="fas fa-paper-plane"></i>
              <i v-else class="fas fa-spinner fa-spin"></i>
            </button>

            <p
              v-if="successMessage"
              class="message success-message"
              data-aos="fade-in"
            >
              {{ successMessage }}
            </p>
            <p
              v-if="errorMessage"
              class="message error-message"
              data-aos="fade-in"
            >
              {{ errorMessage }}
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactView",
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      },
      loading: false,
      successMessage: "",
      errorMessage: "",
    };
  },
  methods: {
    async submitForm() {
      this.loading = true;
      this.successMessage = "";
      this.errorMessage = "";

      const FORMSPREE_FORM_ID = "meokleyw";
      const url = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(this.form),
        });

        if (response.ok) {
          this.successMessage =
            "¡Mensaje enviado con éxito! Te responderé pronto.";
          this.form = {
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          };
        } else {
          const data = await response.json();
          this.errorMessage = data.errors
            ? data.errors.map((err) => err.message).join(", ")
            : "Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo.";
        }
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
        this.errorMessage =
          "Hubo un problema de conexión. Por favor, verifica tu internet e inténtalo de nuevo más tarde.";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.contact-section {
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

.contact-intro {
  text-align: center;
  font-size: 1.1rem;
  color: $color-gray-text;
  max-width: 800px;
  margin: 0 auto 4rem;
  line-height: 1.7;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: flex-start;
}

.contact-info,
.contact-form {
  background-color: lighten($color-dark-background, 5%);
  border-radius: 8px;
  padding: 2.5rem;
  box-shadow: 0 4px 15px rgba($color-dark-background, 0.4);
  h3 {
    font-family: $font-heading;
    color: $color-primary-accent;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
}

.contact-info ul {
  list-style: none;
  padding: 0;
  margin-bottom: 3rem;
  li {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    color: $color-light-text;
    i {
      font-size: 1.5rem;
      color: $color-primary-accent;
      margin-right: 15px;
      width: 30px;
      text-align: center;
    }
    a {
      color: $color-light-text;
      text-decoration: none;
      &:hover {
        color: $color-primary-accent;
      }
    }
    span {
      color: $color-gray-text;
    }
  }
}

.social-links {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  .social-icon {
    font-size: 2rem;
    color: $color-light-text;
    transition: color 0.3s ease, transform 0.3s ease;
    &:hover {
      color: $color-primary-accent;
      transform: translateY(-5px);
    }
  }
}

.form-group {
  margin-bottom: 1.5rem;
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: $color-light-text;
  }
  input[type="text"],
  input[type="email"],
  input[type="tel"], /* ¡AÑADE ESTO! */
  textarea {
    width: 100%;
    padding: 1rem;
    background-color: lighten($color-dark-background, 10%);
    border: 1px solid lighten($color-dark-background, 20%);
    border-radius: 5px;
    color: $color-light-text;
    font-size: 1rem;
    outline: none;
    &:focus {
      border-color: $color-primary-accent;
      box-shadow: 0 0 0 3px rgba($color-primary-accent, 0.3);
    }
  }
  textarea {
    resize: vertical;
  }
}

@media (max-width: 992px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
  .contact-info,
  .contact-form {
    padding: 2rem;
  }
  .section-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .contact-section {
    padding: 4rem 1.5rem;
  }
  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  .contact-info h3,
  .contact-form h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
  .contact-info ul li {
    font-size: 1rem;
  }
  .social-links {
    justify-content: flex-start;
    margin-top: 2rem;
  }
}
.message {
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
  font-size: 1.1rem;
}

.success-message {
  background-color: lighten($color-success, 30%); /* Fondo más claro */
  color: darken($color-success, 15%); /* Texto más oscuro */
  border: 1px solid $color-success;
}

.error-message {
  background-color: lighten($color-error, 30%); /* Fondo más claro */
  color: darken($color-error, 15%); /* Texto más oscuro */
  border: 1px solid $color-error;
}
</style>
