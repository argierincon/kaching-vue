<template>
  <transition name="fade" appear>
    <div class="modal-overlay" v-if="showModal" @click="close"></div>
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

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiCloseCircle } from "@mdi/js";

export default {
  components: { SvgIcon },
  data: () => ({ mdiCloseCircle }),
  props: {
    showModal: { type: Boolean, required: true },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
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
  background-color: $color-white;

  @include tablet {
    @include positions;
    cursor: pointer;
    z-index: 1;
    position: fixed;
    background-color: rgba(10, 10, 10, 0.86);
  }
}

.modal-content {
  @include positions;
  padding: 2rem;
  position: fixed;
  background: $color-white;
  z-index: 1;

  @include tablet {
    width: fit-content;
    height: fit-content;
    margin: auto;
    border-radius: 6px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
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
    transition: color 0.4s ease;

    &:hover {
      transition: color 0.4s ease;
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

  @include tablet {
    opacity: 0;
    transform: scale(0.3) translateY(-50%);
  }
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0, 0);

  @include tablet {
    transition: transform 0.5s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.5s linear;
  }
}
</style>
