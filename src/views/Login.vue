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

        <div>
          <Btn
            btnType="outline-primary"
            label="Iniciar sesión con google"
            :onClick="googleSignIn"
          >
            <template #img-left>
              <img
                class="img-icon"
                src="@/assets/images/logo-google.png"
                alt="Logo google"
              />
            </template>
          </Btn>
          <p class="sign-in-error" v-if="tokenHasFailed">
            😓 Ha ocurido un error al intentar iniciar sesión <br />
            por favor vuelve a intentarlo.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Btn from "@/components/public/Btn.vue";
import router from "@/router/index";
import { verifyToken } from "@/jwt";

const provider = new GoogleAuthProvider();
const auth = getAuth();

let tokenHasFailed = ref(false);

const googleSignIn = async () => {
  try {
    const { user } = await signInWithPopup(auth, provider);

    const { user_id } = verifyToken(user.accessToken);
    if (user_id === user.uid) {
      localStorage.setItem("accessToken", user.accessToken);
      router.push("/");
    } else {
      tokenHasFailed.value = true;
    }
  } catch (error) {
    console.log(error);
  }
};
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
    content: url("../assets/svg/mid-circle-shape-purple.svg");
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
    content: url("../assets/svg/waves-shape-blue.svg");
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
    content: url("../assets/svg/circle-shape-gradient.svg");
    position: absolute;
    width: 48px;
    top: 4%;
    left: 60%;

    @include tablet {
      width: 68px;
    }
  }
}

.sign-in-error {
  margin-top: 0.55rem;
  font-size: 0.75rem;
  text-align: center;
  color: $color-red;
}
</style>
