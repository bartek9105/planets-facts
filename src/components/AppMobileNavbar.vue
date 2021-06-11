<template>
  <nav class="mobile-navbar">
    <ul class="mobile-navbar__list">
      <li v-for="(planet, index) in planets" :key="index" class="mobile-navbar__list-item">
        <router-link :to="planet.name" class="mobile-navbar__list-item-link">
          <div class="mobile-navbar__list-item-left">
            <div
              class="mobile-navbar__list-item-dot"
              :style="{ backgroundColor: planet.color }"
            ></div>
            <span>{{ planet.name }}</span>
          </div>
          <img src="@/assets/icon-chevron.svg" alt="Arrow icon" />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppMobileNavbar',
  props: {
    planets: {
      required: true,
      type: Array,
    },
  },
});
</script>

<style lang="scss" scoped>
.mobile-navbar {
  font-family: 'Spartan';
  font-weight: 700;
  font-size: 0.9375rem;
  line-height: 1.5625rem;
  letter-spacing: 0.085rem;
  width: 100%;
  height: 100%;
  text-transform: uppercase;
  padding: 0 1.5rem;
  margin-top: 1.5rem;
  &__list-item {
    padding: 1.5rem 0;
    border-bottom: 1px solid #393950;
  }
  &__list-item-left {
    display: flex;
    align-items: center;
  }
  &__list-item-dot {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 1.5rem;
    background-color: red;
  }
  &__list-item-link {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
