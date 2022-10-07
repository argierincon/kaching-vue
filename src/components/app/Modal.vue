<template>
  <section class="modal">
    <p @click="close">test</p>
    <slot></slot>
  </section>
</template>

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["close"]);

const close = () => emit("close");
</script>

<style lang="scss" scoped>
.modal {
  z-index: 2;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: white;
}
</style>
