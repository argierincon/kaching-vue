<template>
  <Suspense>
    <template #default>
      <Home />
    </template>
    <template #fallback>
      <SplashScreen />
    </template>
  </Suspense>
</template>

<script>
import { defineAsyncComponent } from "vue";

import SplashScreen from "@/components/SplashScreen.vue";

export default {
  components: {
    Home: defineAsyncComponent(
      () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(require("./components/Home.vue"));
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
</style>
