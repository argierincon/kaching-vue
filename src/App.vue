<template>
  <component :is="layout">
    <transition name="fade-home" mode="out-in">
      <router-view />
    </transition>
  </component>
</template>

<script>
const defaultLayout = "default";
export default {
  name: "App",
  computed: {
    layout() {
      return (this.$route.meta.layout || defaultLayout) + "-layout";
    },
  },
};
</script>

<style>
@import "./assets/scss/reset.scss";
@import "./assets/scss/fonts.scss";

/* from es cuando inicia la transicion, active es cuando esta sucediendo la transicion y to es cuando finaliza */
/* enter = inicio, leave = final */

/* .fade-home-enter-from,
.fade-home-leave-to {
  opacity: 0;
  position: absolute;
}

.fade-home-leave-active,
.fade-home-enter-active {
  transition: opacity 0.4s ease;
} */

.fade-home-enter-from,
.fade-home-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.fade-home-enter-active,
.fade-home-enter-to {
  transition: all 0.3s ease-out;
}
</style>
