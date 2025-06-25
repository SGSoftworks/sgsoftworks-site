<template>
  <header class="main-header">
    <div class="container">
      <router-link to="/" class="logo" @click="closeNav">
        <span>JGSoftworks</span>
        <span class="logo-accent">.dev</span>
      </router-link>

      <nav class="main-nav" :class="{ 'nav-open': isNavOpen }">
        <ul>
          <li><router-link to="/" @click="closeNav">Inicio</router-link></li>
          <li>
            <router-link to="/servicios" @click="closeNav"
              >Servicios</router-link
            >
          </li>
          <li>
            <router-link to="/proyectos" @click="closeNav"
              >Proyectos</router-link
            >
          </li>
          <li><router-link to="/precios" @click="closeNav">Precios</router-link></li>
          <li>
            <router-link to="/sobre-mi" @click="closeNav">Sobre Mí</router-link>
          </li>
          <li>
            <router-link to="/contacto" @click="closeNav">Contacto</router-link>
          </li>
        </ul>
      </nav>

      <button
        class="menu-toggle"
        :class="{ open: isNavOpen }"
        @click="toggleNav"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      isNavOpen: false, // Controla si el menú está abierto o cerrado
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen; // Invierte el estado del menú
    },
    closeNav() {
      this.isNavOpen = false; // Cierra el menú (útil al hacer clic en un enlace)
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.main-header {
  background-color: $color-dark-background;
  color: $color-light-text;
  padding: 1.5rem 0;
  box-shadow: 0 2px 10px rgba($color-dark-background, 0.5);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

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

  &:hover {
    color: $color-light-text;
    .logo-accent {
      color: $color-secondary-accent;
    }
  }
}

.main-nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 30px;
}

.main-nav li a {
  color: $color-light-text;
  font-weight: bold;
  padding: 5px 0;
  position: relative;
  transition: color 0.3s ease;

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    background-color: $color-primary-accent;
    bottom: -5px;
    left: 0;
    transition: width 0.3s ease;
  }

  &:hover:after,
  &.router-link-exact-active:after {
    width: 100%;
  }

  &.router-link-exact-active {
    color: $color-primary-accent;
  }

  &:hover {
    color: $color-primary-accent;
  }
}

.menu-toggle {
  display: none; // Oculto por defecto en desktop
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1001; // Asegura que esté por encima del menú desplegado

  .bar {
    display: block;
    width: 25px;
    height: 3px;
    background-color: $color-primary-accent;
    margin: 5px 0;
    transition: all 0.3s ease;
  }

  // Animación del menú hamburguesa a 'X'
  &.open .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  &.open .bar:nth-child(2) {
    opacity: 0; // La barra del medio desaparece
  }
  &.open .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}

/* Media queries para responsividad */
@media (max-width: 768px) {
  .main-nav {
    // Estilos para el menú móvil
    position: fixed;
    top: 0;
    right: -100%; // Inicialmente fuera de pantalla
    width: 100%;
    height: 100%;
    background-color: rgba(
      $color-dark-background,
      0.98
    ); // Fondo oscuro semi-transparente
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: right 0.4s ease-in-out; // Animación de entrada/salida
    z-index: 999; // Detrás del botón hamburguesa pero delante del resto
    padding-top: 60px; // Espacio para que el header no tape el primer link

    &.nav-open {
      right: 0; // Despliega el menú
    }

    ul {
      flex-direction: column; // Los ítems del menú apilados
      gap: 25px; // Más espacio entre ellos
      text-align: center;
    }

    li a {
      font-size: 1.8rem; // Enlaces más grandes para fácil clic
      padding: 15px 0;
      &:after {
        // Quitar el underline en móvil si lo deseas, o ajustarlo
        bottom: 0; // Mover la línea si la mantienes
      }
      &.router-link-exact-active {
        color: $color-primary-accent;
      }
    }
  }

  .menu-toggle {
    display: block; // Mostrar el menú hamburguesa en móvil
  }
}
</style>