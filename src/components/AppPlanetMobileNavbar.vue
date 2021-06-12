<template>
  <nav class="planet-navbar">
    <ul class="planet-navbar__list">
      <li
        v-for="(tab, index) in tabs"
        :style="[
          activeTab === index ? { borderBottomColor: tabBorderColor, color: 'white' } : null
        ]"
        @click="(activeTab = index), emitSelectedTab(tab)"
        :key="index"
        class="planet-navbar__list-item"
      >
        {{ tab }}
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import planetsColors from "@/constants/planetsColors";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "AppPlanetMobileNavbar",
  setup(_, { emit }) {
    const tabs = ref<string[]>(["overview", "structure", "surface"]);
    const activeTab = ref<number>(0);
    const route = useRoute();

    const emitSelectedTab = (tab: string) => {
      emit("selectedTab", tab);
    };

    const tabBorderColor = computed(
      () => planetsColors.find(planet => planet.name.toLowerCase() === route.params.planet)?.color
    );

    return { tabs, activeTab, emitSelectedTab, tabBorderColor };
  }
});
</script>

<style lang="scss" scoped>
.planet-navbar {
  font-family: "Spartan";
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
