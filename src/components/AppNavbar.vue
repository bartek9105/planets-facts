<template>
  <nav class="navbar">
    <AppLogo class="navbar__logo" />
    <img src="@/assets/icon-hamburger.svg" alt="Menu icon" class="navbar__menu-icon" />
    <ul class="navbar__list">
      <li v-for="(planet, index) in planets" :key="index" class="navbar__list-item">
        <router-link :to="planet" class="navbar__list-item-link">{{ planet }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import AppLogo from '@/components/AppLogo.vue';

export default defineComponent({
  name: 'AppNavbar',
  components: {
    AppLogo,
  },
  setup() {
    const planets = ref<string[]>([
      'mercury',
      'venus',
      'earth',
      'mars',
      'jupiter',
      'saturn',
      'uranus',
      'neptune',
    ]);

    return { planets };
  },
});
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #393950;
  &__list {
    font-family: 'Spartan';
    font-size: 0.6875rem;
    font-weight: 700;
    line-height: 1.5625rem;
    letter-spacing: 0.0625rem;
    display: none;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
  }
  &__list-item {
    &:not(:last-of-type) {
      margin-right: 2rem;
    }
  }
  &__list-item-link {
    color: #c1c1c8;
    &:hover {
      color: $white;
    }
  }
}

@media (min-width: 768px) {
  .navbar {
    flex-direction: column;
    padding: 2.5rem 3.125rem;
    &__logo {
      margin-bottom: 3.125rem;
    }
    &__menu-icon {
      display: none;
    }
    &__list {
      display: flex;
    }
  }
}

@media (min-width: 1440px) {
  .navbar {
    flex-direction: row;
    padding: 1.875rem 2rem;
    &__logo {
      margin-bottom: 0;
    }
  }
}
</style>
