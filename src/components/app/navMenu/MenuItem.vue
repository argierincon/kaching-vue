<template>
  <div class="menu-item">
    <svg-icon class="icon" type="mdi" :path="icon"></svg-icon>
    <p class="label">{{ label }}</p>
  </div>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiBell } from "@mdi/js";

export default {
  components: {
    SvgIcon,
  },
  props: {
    icon: { type: String, default: mdiBell },
    label: { type: String, default: "HOME" },
  },
};
</script>

<style lang="scss" scoped>
.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    .label,
    .icon {
      color: $color-primary;
      transition: all 0.4s ease;
    }
  }
}

.icon {
  color: $color-black-light;
}

.label {
  font-size: 0.65rem;
  font-weight: 300;
  color: $color-black-light;
}
</style>
