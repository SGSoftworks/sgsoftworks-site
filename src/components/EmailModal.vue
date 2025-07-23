<template>
  <transition name="modal-fade">
    <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
      <div class="modal-container">
        <button class="close-button" @click="closeModal">
          <i class="fas fa-times"></i>
        </button>
        <h3>Enviar Mensaje Directamente</h3>
        <p class="modal-subtitle">
          Rellena tus datos y envía un mensaje. El asunto y el contenido ya
          están preestablecidos.
        </p>

        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="modalName">Tu Nombre:</label>
            <input
              type="text"
              id="modalName"
              v-model="form.userName"
              placeholder="Tu nombre completo"
              required
            />
          </div>
          <div class="form-group">
            <label for="modalEmail">Tu Email:</label>
            <input
              type="email"
              id="modalEmail"
              v-model="form.userEmail"
              placeholder="tu@correo.com"
              required
            />
          </div>

          <div class="form-group">
            <label for="modalPhone"
              >Tu Número de Teléfono/WhatsApp (con indicativo):</label
            >
            <input
              type="tel"
              id="modalPhone"
              v-model="form.userPhone"
              placeholder="Ej: +57 321 917 7602"
              required
            />
          </div>

          <div class="form-group">
            <label for="modalSubject">Asunto:</label>
            <input
              type="text"
              id="modalSubject"
              v-model="form.subject"
              readonly
            />
          </div>
          <div class="form-group">
            <label for="modalMessage">Mensaje:</label>
            <textarea
              id="modalMessage"
              v-model="form.message"
              rows="5"
              readonly
            ></textarea>
          </div>
          <p class="edit-note">
            Tu mensaje será enviado directamente sin abrir tu cliente de correo.
          </p>

          <button type="submit" class="btn btn-primary" :disabled="loading">
            {{ loading ? "Enviando..." : "Enviar Mensaje" }}
            <i v-if="!loading" class="fas fa-paper-plane"></i>
            <i v-else class="fas fa-spinner fa-spin"></i>
          </button>

          <p v-if="successMessage" class="message success-message">
            {{ successMessage }}
          </p>
          <p v-if="errorMessage" class="message error-message">
            {{ errorMessage }}
          </p>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "EmailModal",
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
    subject: {
      type: String,
      default: "Consulta General desde el Portafolio",
    },
    predefinedMessage: {
      type: String,
      default: "Hola, me gustaría más información.",
    },
  },
  data() {
    return {
      FORMSPREE_FORM_ID: "meokleyw",
      form: {
        userName: "",
        userEmail: "",
        userPhone: "",
        subject: this.subject,
        message: this.predefinedMessage,
      },
      loading: false,
      successMessage: "",
      errorMessage: "",
    };
  },
  watch: {
    isVisible(newValue) {
      if (newValue) {
        this.form.userName = "";
        this.form.userEmail = "";
        this.form.userPhone = "";
        this.successMessage = "";
        this.errorMessage = "";
        this.form.subject = this.subject;
        this.form.message = this.predefinedMessage;
      }
    },
    subject(newVal) {
      this.form.subject = newVal;
    },
    predefinedMessage(newVal) {
      this.form.message = newVal;
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    async submitForm() {
      if (!this.form.userPhone) {
        this.errorMessage = "Por favor, introduce tu número de teléfono.";
        return;
      }

      this.loading = true;
      this.successMessage = "";
      this.errorMessage = "";

      const url = `https://formspree.io/f/${this.FORMSPREE_FORM_ID}`;

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: this.form.userName,
            _replyto: this.form.userEmail,
            phone: this.form.userPhone,
            subject: this.form.subject,
            message: this.form.message,
            source: "Modal de Precios (Formulario Simple)",
          }),
        });

        if (response.ok) {
          this.successMessage =
            "¡Mensaje enviado con éxito! Pronto me pondré en contacto contigo.";
          this.form.userName = "";
          this.form.userEmail = "";
          this.form.userPhone = "";
          setTimeout(() => {
            this.closeModal();
          }, 4000);
        } else {
          const data = await response.json();
          this.errorMessage = data.errors
            ? data.errors.map((err) => err.message).join(", ")
            : "Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo.";
        }
      } catch (error) {
        console.error("Error al enviar el formulario con Formspree:", error);
        this.errorMessage =
          "Hubo un problema de conexión. Por favor, verifica tu internet e inténtalo de nuevo más tarde.";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/_variables.scss";

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow-y: auto;
  padding: 20px 0;
  box-sizing: border-box;
}

.modal-container {
  background-color: lighten($color-dark-background, 5%);
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.5);
  width: 90%;
  max-width: 550px;
  max-height: 95vh;
  overflow-y: auto;
  position: relative;
  color: $color-light-text;
  text-align: left;
  transform: translateY(0);
  opacity: 1;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .modal-container {
    padding: 1.5rem;
    width: 95%;
    max-width: 95vw;
    margin: 10px auto;
  }

  h3 {
    font-size: 1.6rem;
  }

  .modal-subtitle,
  .edit-note,
  .message {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .modal-container {
    padding: 1rem;
    width: 98%;
    max-width: 98vw;
  }

  h3 {
    font-size: 1.4rem;
    line-height: 1.2;
  }

  .modal-subtitle {
    font-size: 0.85rem;
  }

  .form-group label {
    font-size: 0.9rem;
  }

  input[type="email"],
  input[type="text"],
  textarea {
    padding: 0.6rem;
    font-size: 0.85rem;
  }

  .btn-primary {
    padding: 0.7rem 1rem;
    font-size: 0.95rem;
  }
}

h3 {
  font-family: $font-heading;
  font-size: 1.8rem;
  color: $color-primary-accent;
  margin-bottom: 1rem;
  text-align: center;
}

.modal-subtitle {
  font-size: 0.95rem;
  color: $color-gray-text;
  text-align: center;
  margin-bottom: 2rem;
}

.close-button {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.8rem;
  color: $color-gray-text;
  cursor: pointer;
  transition: color 0.2s ease;
  &:hover {
    color: $color-light-text;
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
  input[type="email"],
  input[type="text"],
  input[type="tel"],
  textarea {
    width: 100%;
    padding: 0.8rem;
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

.edit-note {
  font-size: 0.85rem;
  color: $color-gray-text;
  text-align: center;
  margin-bottom: 1.5rem;
}

.btn-primary {
  width: auto;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.btn-primary:disabled {
  background-color: lighten($color-primary-accent, 15%);
  cursor: not-allowed;
  box-shadow: none;
  transform: none;
}

.message {
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
  font-size: 1rem;
}

.success-message {
  background-color: lighten($color-success, 30%);
  color: darken($color-success, 15%);
  border: 1px solid $color-success;
}

.error-message {
  background-color: lighten($color-error, 30%);
  color: darken($color-error, 15%);
  border: 1px solid $color-error;
}

.error-message-small {
  color: $color-error;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  text-align: center;
}
</style>
