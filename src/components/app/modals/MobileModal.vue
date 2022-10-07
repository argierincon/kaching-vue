<template>
  <transition name="fade" appear>
    <section class="modal">
      <div class="modal-bg"></div>
      <div class="modal-content">
        <svg-icon
          class="close-icon"
          type="mdi"
          size="20"
          :path="icon"
          @click="close"
        ></svg-icon>
        <slot></slot>
      </div>
    </section>
  </transition>
</template>

<script setup>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiCloseCircle } from "@mdi/js";

const icon = mdiCloseCircle;

import { defineEmits } from "vue";

const emit = defineEmits(["close"]);

const close = () => {
  console.log("CERRÓ");
  return emit("close");
};
</script>

<style lang="scss" scoped>
@mixin positions {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.modal {
  @include positions;
  position: fixed;
  z-index: 2;

  @include tablet {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
}

.modal-bg {
  background-color: $color-white;

  @include tablet {
    @include positions;
    position: absolute;
    background-color: rgba(10, 10, 10, 0.86);
  }
}

.modal-content {
  height: 100%;
  padding: 3rem 2rem 2rem 2rem;
  position: relative;
  background-color: $color-white;

  @include tablet {
    height: auto;
    padding: 3rem 2rem 2rem 2rem;
    border-radius: 6px;
  }
}

.close-icon {
  display: none;

  @include tablet {
    display: block;
    color: $color-black-light;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      transition: color 0.3s ease;
      color: $color-black-blue;
    }
  }
}

// Clases de transicion

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.2s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.2s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}
</style>
