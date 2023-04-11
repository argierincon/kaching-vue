<template>
  <Suspense>
    <template #default>
      <router-view v-slot="{ Component }">
        <transition name="fade-home" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </template>
    <template #fallback>
      <SplashScreen />
    </template>
  </Suspense>
</template>

<script>
import { defineAsyncComponent } from "vue";

import SplashScreen from "@/components/public/SplashScreen.vue";

export default {
  components: {
    Home: defineAsyncComponent(
      () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(require("./views/Home.vue"));
          }, 1000);
        })
    ),
    SplashScreen,
  },
};
</script>

<style>
@import "./assets/scss/reset.scss";
@import "./assets/scss/fonts.scss";

/* from es cuando inicia la transicion, active es cuando esta sucediendo la transicion y to es cuando finaliza */
/* enter = inicio, leave = final */
.fade-home-enter-from,
.fade-home-leave-to {
  opacity: 0;
  position: absolute;
}

.fade-home-leave-active,
.fade-home-enter-active {
  transition: opacity 0.4s ease;
}
</style>
