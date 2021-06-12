<template>
  <div>
    <AppPlanetMobileNavbar planetColor="#2D64F0" />
    <article class="planet-info">
      <div class="planet-info__img-container">
        <img :src="getImgUrl(planet.images.planet)" class="planet-info__img" />
      </div>
      <section>
        <h2 class="planet-info__name">{{ planet.name }}</h2>
        <p class="planet-info__overview">{{ planet.overview.content }}</p>
      </section>
      <div class="planet-info__source">
        <span>Source: </span>
        <span>
          <a :href="planet.overview.source" class="planet-info__link">Wikipedia</a>
          <img src="@/assets/icon-source.svg" alt="Wikipedia link" />
        </span>
      </div>
      <section class="planet-info__stats">
        <div class="planet-info__stats-item">
          <span class="planet-info__stats-item-name">Rotation Time</span>
          <span class="planet-info__stats-item-data">{{ planet.rotation }}</span>
        </div>
        <div class="planet-info__stats-item">
          <span class="planet-info__stats-item-name">Revolution Time</span>
          <span class="planet-info__stats-item-data">{{ planet.revolution }}</span>
        </div>
        <div class="planet-info__stats-item">
          <span class="planet-info__stats-item-name">Radius</span>
          <span class="planet-info__stats-item-data">{{ planet.radius }}</span>
        </div>
        <div class="planet-info__stats-item">
          <span class="planet-info__stats-item-name">Average Temp.</span>
          <span class="planet-info__stats-item-data">{{ planet.temperature }}</span>
        </div>
      </section>
    </article>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import AppPlanetMobileNavbar from "@/components/AppPlanetMobileNavbar.vue";
import data from "@/assets/data.json";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "Home",
  components: {
    AppPlanetMobileNavbar
  },
  setup() {
    const planets = data;
    const route = useRoute();

    const planet = computed(() =>
      planets.find(planetItem => planetItem.name.toLowerCase() === route.params.planet)
    );

    const getImgUrl = (img: string) => require("../assets/" + img);

    return { planet, getImgUrl };
  }
});
</script>

<style lang="scss" scoped>
.planet-info {
  padding: 4.5rem 1.5rem 3rem 1.5rem;
  &__img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 6.875rem;
  }
  &__img {
    display: block;
    width: 12.5rem;
    height: 100%;
  }
  &__name {
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  &__overview {
    font-size: 0.6875rem;
    text-align: center;
    line-height: 1.375rem;
    margin-bottom: 2rem;
  }
  &__source {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 0.75rem;
    line-height: 1.5625rem;
    margin-bottom: 2.25rem;
  }
  &__link {
    font-weight: 700;
    text-decoration: underline;
    margin-right: 0.25rem;
  }
  &__stats-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #393950;
    margin-bottom: 0.5rem;
    padding: 1rem 1.5rem;
  }
  &__stats-item-name {
    color: #838391;
    font-size: 0.5rem;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1rem;
  }
  &__stats-item-data {
    font-family: "Antonio";
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: -0.046875rem;
    line-height: 100%;
    text-transform: uppercase;
  }
}
</style>
