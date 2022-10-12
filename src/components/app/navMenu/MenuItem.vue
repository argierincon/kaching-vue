<template>
  <div class="menu-item" :class="{ active: isActive }" @click="onClick">
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
    onClick: { type: Function, required: true },
    isActive: { type: Boolean, default: false },
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

  &.active {
    .label,
    .icon {
      color: $color-primary;
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

  @include laptop {
    font-size: 0.75rem;
  }
}
</style>
