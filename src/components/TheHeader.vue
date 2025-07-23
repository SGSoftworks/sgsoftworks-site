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
          <li>
            <router-link to="/precios" @click="closeNav">Precios</router-link>
          </li>
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
      isNavOpen: false,
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
    closeNav() {
      this.isNavOpen = false;
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
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1001;

  .bar {
    display: block;
    width: 25px;
    height: 3px;
    background-color: $color-primary-accent;
    margin: 5px 0;
    transition: all 0.3s ease;
  }

  &.open .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  &.open .bar:nth-child(2) {
    opacity: 0;
  }
  &.open .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}

@media (max-width: 768px) {
  .main-nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100%;
    background-color: rgba($color-dark-background, 0.98);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: right 0.4s ease-in-out;
    z-index: 999;
    padding-top: 60px;

    &.nav-open {
      right: 0;
    }

    ul {
      flex-direction: column;
      gap: 25px;
      text-align: center;
    }

    li a {
      font-size: 1.8rem;
      padding: 15px 0;
      &:after {
        bottom: 0;
      }
      &.router-link-exact-active {
        color: $color-primary-accent;
      }
    }
  }

  .menu-toggle {
    display: block;
  }
}
</style>
