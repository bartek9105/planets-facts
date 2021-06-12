<template>
  <nav class="planet-navbar">
    <ul class="planet-navbar__list">
      <li
        class="planet-navbar__list-item"
        @click="activeTab = index"
        :style="[activeTab === index ? { borderBottomColor: planetColor, color: 'white' } : null]"
        v-for="(tab, index) in tabs"
        :key="index"
      >
        {{ tab }}
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'AppPlanetMobileNavbar',
  props: {
    planetColor: {
      required: true,
      type: String,
    },
  },
  setup() {
    const tabs = ref<string[]>(['Overview', 'Structure', 'Surface']);
    const activeTab = ref<number>(0);

    return { tabs, activeTab };
  },
});
</script>

<style lang="scss" scoped>
.planet-navbar {
  font-family: 'Spartan';
  font-size: 0.5625rem;
  font-weight: 700;
  letter-spacing: 0.120625rem;
  text-transform: uppercase;
  padding: 0 1.5rem;
  border-bottom: 1px solid #393950;
  &__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__list-item {
    color: #838381;
    padding: 1.25rem 0;
    border-bottom: 4px solid transparent;
  }
}
@media (min-width: 768px) {
  .planet-navbar {
    display: none;
  }
}
</style>
