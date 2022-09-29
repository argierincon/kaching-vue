<template>
  <div class="splashscreen">
    <img
      class="splashscreen__logo"
      src="@/assets/images/kaching.png"
      alt="Logo k4ch1ng!"
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.splashscreen {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $bg-gradient-primary;

  &__logo {
    width: 60%;

    @include tablet {
      width: 40%;
    }

    @include laptop {
      width: 350px;
    }
  }
}
</style>
