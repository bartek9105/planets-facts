<template>
  <span class="logo">The Planets</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppLogo',
});
</script>

<style lang="scss" scoped>
.logo {
  font-family: 'Antonio';
  font-size: 1.75rem;
  font-weight: 500;
  letter-spacing: -0.065625rem;
  line-height: 100%;
  text-transform: uppercase;
}
</style>
