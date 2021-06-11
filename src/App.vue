<template>
  <AppNavbar />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppNavbar from '@/components/AppNavbar.vue';

export default defineComponent({
  components: {
    AppNavbar,
  },
});
</script>

<style lang="scss"></style>
