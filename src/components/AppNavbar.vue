<template>
  <nav class="navbar">
    <AppLogo class="navbar__logo" />
    <img
      src="@/assets/icon-hamburger.svg"
      alt="Menu"
      class="navbar__menu-icon"
      @click="showMobileNav = !showMobileNav"
    />
    <ul class="navbar__list">
      <li
        v-for="(planet, index) in planets"
        :key="index"
        class="navbar__list-item"
        @mouseover="(linkHover = true), (hoveredIndex = index)"
        @mouseleave="linkHover = false"
        :style="[
          linkHover && hoveredIndex === index ? { borderTopColor: `${planet.color}` } : null
        ]"
      >
        <router-link :to="planet.name" class="navbar__list-item-link">
          {{ planet.name }}
        </router-link>
      </li>
    </ul>
    <AppMobileNavbar
      class="navbar__mobile"
      :planets="planets"
      v-if="showMobileNav"
      @hideMobileNav="showMobileNav = false"
    />
  </nav>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import AppLogo from "@/components/AppLogo.vue";
import AppMobileNavbar from "@/components/AppMobileNavbar.vue";

export default defineComponent({
  name: "AppNavbar",
  components: {
    AppLogo,
    AppMobileNavbar
  },
  setup() {
    const planets = reactive([
      { name: "mercury", color: "#DEF4FC" },
      { name: "venus", color: "#F7CC7F" },
      { name: "earth", color: "#545BFE" },
      { name: "mars", color: "#FF6A45" },
      { name: "jupiter", color: "#ECAD7A" },
      { name: "saturn", color: "#FCCB6B" },
      { name: "uranus", color: "#65F0D5" },
      { name: "neptune", color: "#497EFA" }
    ]);
    const showMobileNav = ref<boolean>(false);
    const linkHover = ref<boolean>(false);
    const hoveredIndex = ref<number>();

    return {
      planets,
      showMobileNav,
      linkHover,
      hoveredIndex
    };
  }
});
</script>

<style lang="scss" scoped>
.navbar {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #393950;
  &__list {
    font-family: "Spartan";
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
    display: flex;
    align-items: center;
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
  &__menu-icon {
    cursor: pointer;
  }
  &__mobile {
    position: fixed;
    top: 4.8125rem;
    left: 0;
  }
}

@media (min-width: 768px) {
  .navbar {
    flex-direction: column;
    padding: 2rem 3.125rem 0 3.125rem;
    &__logo {
      margin-bottom: 0.625rem;
    }
    &__menu-icon {
      display: none;
    }
    &__list {
      display: flex;
    }
    &__list-item {
      border-top: 4px solid transparent;
    }
    &__list-item-link {
      padding: 2.25rem 0;
    }
  }
}

@media (min-width: 1440px) {
  .navbar {
    flex-direction: row;
    padding: 0 2rem;
    &__logo {
      margin-bottom: 0;
    }
  }
}
</style>
