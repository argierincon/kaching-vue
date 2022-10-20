<template>
  <header>
    <img
      class="header-logo"
      src="@/assets/images/logo-kaching.png"
      alt="Logo k4ch1ng!"
    />
    <p class="header-title">K4CHING$!</p>

    <svg-icon
      @click="googleSignOut"
      class="log-out"
      type="mdi"
      :path="iconLogOut"
    ></svg-icon>
  </header>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiLogout } from "@mdi/js";
import { getAuth, signOut } from "firebase/auth";

export default {
  components: {
    SvgIcon,
  },
  data() {
    return {
      iconLogOut: mdiLogout,
    };
  },
  methods: {
    googleSignOut() {
      const auth = getAuth();

      signOut(auth)
        .then(() => {
          localStorage.setItem("accessToken", "");
          this.$router.push("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  padding: 1.5rem 1.5rem 0;
  gap: 1rem;
  display: grid;
  grid-template-columns: 80px 1fr 30px;
  align-items: center;
  grid-area: A;

  @include laptop {
    padding: 3rem 3rem 0;
  }
}

.log-out {
  color: $color-black-light;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transition: all 0.3s ease;
    color: $color-primary;
  }
}

.header-logo {
  width: 80px;
}

.header-title {
  font-size: 1.25rem;
  font-weight: 500;
  color: $color-primary;
}
</style>
