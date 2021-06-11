<template>
  <AppButton btnNumber="01" btnText="Button" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppButton from '@/components/AppButton.vue';

export default defineComponent({
  name: 'Home',
  components: {
    AppButton,
  },
});
</script>

<style lang="scss"></style>
