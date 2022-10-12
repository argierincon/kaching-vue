<template>
  <Suspense>
    <template #default>
      <router-view v-slot="{ Component }">
        <transition name="slide">
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

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease-out;
}
</style>
