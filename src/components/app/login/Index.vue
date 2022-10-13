<template>
  <section class="container-login">
    <div class="login-box">
      <span class="circle"></span>
      <div class="login-actions">
        <img
          class="login-img"
          src="@/assets/images/login-kaching-logo.png"
          alt="Logo k4ch1ng!"
        />
        <Btn btnType="outline-primary" label="Inicia sesión con google">
          <template #img-left>
            <img
              class="img-icon"
              src="@/assets/images/logo-google.png"
              alt="Logo google"
            />
          </template>
        </Btn>
      </div>
    </div>
  </section>
</template>

<script setup>
import Btn from "@/components/public/Btn.vue";
</script>

<style lang="scss" scoped>
@mixin flex-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container-login {
  @include flex-column;
  height: 100vh;
}

.login-box {
  @include laptop {
    @include flex-column;
    width: 600px;
    height: 600px;
    position: relative;
    background: $color-white;
    box-shadow: -2px 2px 15px 5px rgb(85 85 85 / 16%);
    border-radius: 10px;
  }

  &::before {
    content: url("../../../assets/svg/mid-circle-shape-purple.svg");
    position: absolute;
    top: 18%;
    left: 0;
    width: 45px;

    @include tablet {
      width: 65px;
      top: 18%;
    }
  }

  &::after {
    content: url("../../../assets/svg/waves-shape-blue.svg");
    margin-top: 4%;
    position: absolute;
    width: 80px;
    right: 0;
    bottom: 5%;

    @include tablet {
      width: 115px;
      bottom: 8%;
    }
  }
}

.login-actions {
  @include flex-column;
  gap: 2.5rem;

  @include tablet {
    gap: 4rem;
  }
}

.login-img {
  width: 42%;

  @include tablet {
    width: 10rem;
  }
}

.circle {
  &::before {
    content: url("../../../assets/svg/circle-shape-gradient.svg");
    position: absolute;
    width: 48px;
    top: 4%;
    left: 60%;

    @include tablet {
      width: 68px;
    }
  }
}
</style>
