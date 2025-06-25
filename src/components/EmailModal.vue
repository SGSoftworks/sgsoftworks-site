<template>
  <transition name="modal-fade">
    <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
      <div class="modal-container">
        <button class="close-button" @click="closeModal">
          <i class="fas fa-times"></i>
        </button>
        <h3>Enviar Correo</h3>
        <p class="modal-subtitle">Envíame un mensaje rápido. El asunto y el contenido ya están preestablecidos.</p>

        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="modalEmail">Tu Email:</label>
            <input
              type="email"
              id="modalEmail"
              v-model="userEmail"
              placeholder="tu@correo.com"
              required
            />
          </div>
          <div class="form-group">
            <label for="modalSubject">Asunto:</label>
            <input type="text" id="modalSubject" :value="subject" readonly />
          </div>
          <div class="form-group">
            <label for="modalMessage">Mensaje:</label>
            <textarea
              id="modalMessage"
              :value="predefinedMessage"
              rows="5"
              readonly
            ></textarea>
          </div>
          <p class="edit-note">Puedes editar el asunto y mensaje después de hacer clic en enviar.</p>

          <button type="submit" class="btn btn-primary" :disabled="loading">
            {{ loading ? 'Abriendo Correo...' : 'Abrir en tu Cliente de Correo' }}
            <i v-if="!loading" class="fas fa-paper-plane"></i>
            <i v-else class="fas fa-spinner fa-spin"></i>
          </button>

          <p v-if="successMessage" class="message success-message">{{ successMessage }}</p>
          <p v-if="errorMessage" class="message error-message">{{ errorMessage }}</p>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'EmailModal',
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
    subject: {
      type: String,
      default: 'Consulta General desde el Portafolio',
    },
    predefinedMessage: {
      type: String,
      default: 'Hola, me gustaría más información.',
    },
  },
  data() {
    return {
      userEmail: '', // Email del usuario que envía el mensaje
      loading: false,
      successMessage: '',
      errorMessage: '',
    };
  },
  watch: {
    isVisible(newValue) {
      if (newValue) {
        // Reiniciar mensajes y email al abrir el modal
        this.userEmail = '';
        this.successMessage = '';
        this.errorMessage = '';
      }
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    async submitForm() {
      this.loading = true;
      this.successMessage = '';
      this.errorMessage = '';

      // Usar mailto: para abrir el cliente de correo del usuario
      const mailtoLink = `mailto:juan.dev1809@gmail.com?subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(this.predefinedMessage + '\n\nMi correo: ' + this.userEmail)}`;

      try {
        window.location.href = mailtoLink;

        this.successMessage = 'Tu cliente de correo se ha abierto. ¡Gracias por contactarme!';
        this.loading = false;
        setTimeout(() => {
          this.closeModal();
        }, 3000);

      } catch (error) {
        console.error("Error al abrir el cliente de correo:", error);
        this.errorMessage = "No se pudo abrir el cliente de correo. Por favor, copia la dirección o inténtalo con WhatsApp.";
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from, .modal-fade-leave-to {
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
}

.modal-container {
  background-color: lighten($color-dark-background, 5%);
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.5);
  width: 90%;
  max-width: 500px;
  position: relative;
  color: $color-light-text;
  text-align: left;

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
  gap: 8px; // Espacio entre texto e icono
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
</style>