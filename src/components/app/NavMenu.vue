<template>
  <section class="nav-menu">
    <div class="menu-item">
      <svg-icon class="icon-bell" type="mdi" :path="iconBell"></svg-icon>
      <p>Home</p>
    </div>
    <div class="menu-item">
      <svg-icon class="icon-bell" type="mdi" :path="iconBell"></svg-icon>
      <p>Home</p>
    </div>
    <div class="menu-item">
      <svg-icon class="icon-bell" type="mdi" :path="iconBell"></svg-icon>
      <p>Home</p>
    </div>
    <div class="menu-item">
      <svg-icon class="icon-bell" type="mdi" :path="iconBell"></svg-icon>
      <p>Home</p>
    </div>
  </section>
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
.nav-menu {
  padding: 0.5rem;
  width: 100%;
  background: $bg-color-violet;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  position: fixed;
  bottom: 0;
  gap: 0.5rem;
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  svg {
    color: $color-black-light;
  }

  p {
    font-size: 0.8rem;
    font-weight: 300;
    color: $color-black-light;
  }
}
</style>
