<template>
  <footer class="main-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <router-link to="/" class="logo">
            <span>JGSoftworks</span>
            <span class="logo-accent">.dev</span>
          </router-link>
          <p class="tagline">Creando experiencias digitales excepcionales.</p>
        </div>

        <nav class="footer-nav">
          <h3>Navegación</h3>
          <ul>
            <li><router-link to="/">Inicio</router-link></li>
            <li><router-link to="/servicios">Servicios</router-link></li>
            <li><router-link to="/proyectos">Proyectos</router-link></li>
            <li><router-link to="/sobre-mi">Sobre Mí</router-link></li>
            <li><router-link to="/contacto">Contacto</router-link></li>
          </ul>
        </nav>

        <div class="footer-contact">
          <h3>Contacto</h3>
          <p><i class="fas fa-envelope"></i> juan.dev1809@gmail.com</p>
          <p><i class="fas fa-phone"></i> +57 321 917 7602</p>
          <p><i class="fas fa-map-marker-alt"></i> Colombia.</p>
        </div>

        <div class="footer-social">
          <h3>Sígueme</h3>
          <div class="social-icons">
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
      </div>

      <div class="footer-bottom">
        <p>
          &copy; {{ currentYear }} JGSoftworks.dev | Todos los derechos
          reservados.
        </p>
        <p>
          Diseñado y desarrollado con <i class="fas fa-heart red-heart"></i> por
          Juan David Gómez.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.main-footer {
  background-color: lighten(
    $color-dark-background,
    2%
  ); // Un poco más claro que el fondo principal
  color: $color-gray-text;
  padding: 4rem 2rem 2rem; // Más padding arriba
  border-top: 1px solid rgba($color-light-text, 0.05); // Línea divisoria sutil
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(220px, 1fr)
  ); // Columnas responsivas
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-brand {
  .logo {
    font-family: $font-heading;
    font-size: 1.8rem;
    font-weight: bold;
    color: $color-light-text;
    text-decoration: none;
    display: flex;
    align-items: baseline;
    .logo-accent {
      color: $color-primary-accent;
      font-size: 1.2rem;
      margin-left: 2px;
    }
  }
  .tagline {
    font-size: 0.9rem;
    margin-top: 0.8rem;
    line-height: 1.5;
    color: $color-gray-text;
  }
}

.footer-nav,
.footer-contact,
.footer-social {
  h3 {
    font-family: $font-heading;
    font-size: 1.5rem;
    color: $color-light-text; // Títulos en blanco
    margin-bottom: 1.5rem;
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      margin-bottom: 0.8rem;
      a {
        color: $color-gray-text;
        text-decoration: none;
        transition: color 0.3s ease;
        &:hover {
          color: $color-primary-accent;
        }
      }
    }
  }
  p {
    margin-bottom: 0.8rem;
    display: flex;
    align-items: center;
    i {
      color: $color-primary-accent; // Iconos en rojo
      margin-right: 10px;
      width: 20px;
    }
  }
}

.social-icons {
  display: flex;
  gap: 1rem;
  .social-icon {
    font-size: 1.8rem;
    color: $color-gray-text;
    transition:
      color 0.3s ease,
      transform 0.3s ease;
    &:hover {
      color: $color-primary-accent;
      transform: translateY(-3px);
    }
  }
}

.footer-bottom {
  border-top: 1px solid rgba($color-light-text, 0.05);
  padding-top: 2rem;
  text-align: center;
  font-size: 0.9rem;
  color: $color-gray-text;

  p {
    margin-bottom: 0.5rem;
  }

  .red-heart {
    color: $color-primary-accent; // Corazón en rojo
  }
}

/* Media Queries para responsividad */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr; // Una columna en móvil
    text-align: center;
    .footer-brand,
    .footer-nav,
    .footer-contact,
    .footer-social {
      margin-bottom: 2rem;
      h3 {
        margin-bottom: 1rem;
      }
      ul {
        li {
          margin-bottom: 0.5rem;
        }
      }
    }
    .footer-contact p,
    .footer-social .social-icons {
      justify-content: center;
    }
    .footer-brand .logo {
      justify-content: center;
    }
  }
  .main-footer {
    padding: 3rem 1.5rem 1.5rem;
  }
}
</style>
