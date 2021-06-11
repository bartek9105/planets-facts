<template>
  <div>
    <AppPlanetMobileNavbar planetColor="#2D64F0" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppPlanetMobileNavbar from '@/components/AppPlanetMobileNavbar.vue';

export default defineComponent({
  name: 'Home',
  components: {
    AppPlanetMobileNavbar,
  },
});
</script>

<style lang="scss"></style>
