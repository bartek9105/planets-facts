<template>
  <button class="btn">
    <span class="btn__number">{{ btnNumber }}</span>
    <span class="btn__text">{{ btnText }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    btnNumber: {
      required: true,
      type: String,
    },
    btnText: {
      required: true,
      type: String,
    },
  },
});
</script>

<style lang="scss" scoped>
.btn {
  background-color: transparent;
  border: 1px solid #393950;
  font-family: 'Spartan';
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1.5625rem;
  cursor: pointer;
  padding: 0.75rem 1.75rem;
  text-transform: uppercase;
  &:hover {
    background-color: #313148;
  }
  &__number {
    color: $gray-light;
    letter-spacing: 0.160625rem;
    margin-right: 1.75rem;
  }
  &__text {
    letter-spacing: 0.160625rem;
  }
}
</style>
