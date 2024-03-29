<template>
  <transition name="fade" appear>
    <div class="modal-overlay" v-if="showModal" @click="closeOut"></div>
  </transition>
  <transition name="pop" appear>
    <div class="modal-content" role="dialog" v-if="showModal">
      <svg-icon
        class="close-icon"
        type="mdi"
        size="20"
        :path="mdiCloseCircle"
        @click="close"
      ></svg-icon>
      <slot></slot>
    </div>
  </transition>
</template>

<script setup>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiCloseCircle } from "@mdi/js";

import { defineProps, toRefs, ref } from "vue";

const props = defineProps({
  showModal: { type: Boolean, required: true },
  closeOutside: { type: Boolean, required: true },
  // test: { type: String, required: true },
  // b: { type: Boolean, required: true },
});

const { showModal, closeOutside } = toRefs(props);

const emit = defineEmits(["close"]);
const close = () => emit("close");

const closeOut = () => {
  if (closeOutside.value) {
    close();
  }
};
</script>

<style lang="scss" scoped>
@mixin positions {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.modal-overlay {
  background-color: transparent;

  @include laptop {
    @include positions;
    cursor: pointer;
    z-index: 1;
    position: fixed;
    background-color: rgba(10, 10, 10, 0.86);
  }
}

.modal-content {
  @include positions;
  height: calc(100% - 60px);
  padding: 2rem;
  position: fixed;
  background: $color-white;
  z-index: 1;

  @include tablet {
    padding: 3rem;
  }

  @include laptop {
    padding: 2rem;
    min-width: 450px;
    width: fit-content;
    height: fit-content;
    margin: auto;
    border-radius: 6px;
    // box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    box-shadow: 0 6px 22px -3px #000;
  }
}

.close-icon {
  display: none;

  @include laptop {
    transform: rotate(-360deg);
    display: block;
    color: $color-black-light;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    transition: color 0.4s ease;
    transition: all 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0s;

    &:hover {
      transform: rotate(360deg);
      transition: all 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0s;
      color: $color-black-blue;
    }
  }
}

/* ---------------Clases de transicion------------------- */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s linear;
}

.pop-enter-from,
.pop-leave-to {
  transform: scale(1) translateX(100%);

  @include laptop {
    opacity: 0;
    transform: scale(0.3) translateY(-50%);
  }
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0, 0);

  @include laptop {
    transition: transform 0.5s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.5s linear;
  }
}

@media screen and (orientation: landscape) and (max-device-width: 1023px) {
  .modal-content {
    padding: 3rem;
    width: 100%;
    height: calc(100% - 60px);
    overflow: auto;
  }

  .pop-enter-from,
  .pop-leave-to {
    opacity: 1;
    transform: scale(1) translateX(100%);
  }
}
</style>
