<template>
  <div class="service-item" data-aos="fade-up" :data-aos-delay="delay">
    <div class="service-item-inner">
      <div class="icon-wrapper" data-aos="fade-up" :data-aos-delay="delay">
        <i :class="iconClass" class="service-icon"></i>
      </div>
    </div>

    <h3 class="service-title">{{ title }}</h3>
    <p class="service-description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "ServiceItem",
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    delay: {
      type: [String, Number],
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.service-item {
  background-color: lighten($color-dark-background, 5%);
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  height: 100%;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 10px 20px rgba($color-primary-accent, 0.2);
  }
}

.icon-wrapper {
  font-size: 3.5rem;
  color: $color-primary-accent;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
}

.service-title {
  font-family: $font-heading;
  font-size: 1.8rem;
  color: $color-light-text;
  margin-bottom: 1rem;
}

.service-description {
  font-size: 1rem;
  color: $color-gray-text;
  line-height: 1.6;
}
@media (max-width: 768px) {
  .service-item {
    padding: 1.5rem;
  }
  .icon-wrapper {
    font-size: 3rem;
  }
  .service-title {
    font-size: 1.6rem;
  }
}
</style>
