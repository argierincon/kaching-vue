<template>
  <header>
    <img
      class="header-logo"
      src="@/assets/images/logo-kaching.png"
      alt="Logo k4ch1ng!"
    />
    <p class="header-title">K4CHING$!</p>

    <svg-icon class="icon-bell" type="mdi" :path="iconBell"></svg-icon>
  </header>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiBell } from "@mdi/js";

export default {
  components: {
    SvgIcon,
  },
  data() {
    return {
      iconBell: mdiBell,
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  padding: 20px;
  gap: 1rem;
  display: grid;
  grid-template-columns: 80px 1fr 30px;
  align-items: center;

  @include tablet {
  }
}

.icon-bell {
  color: $color-black-light;
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
