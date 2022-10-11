<template>
  <Suspense>
    <template #default>
      <router-view v-slot="{ Component }">
        <transition name="fade">
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
            resolve(require("./components/public/Home.vue"));
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

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-out;
}
</style>
