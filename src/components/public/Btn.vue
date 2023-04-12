<template>
  <button
    :type="type"
    class="btn"
    :class="btnClass"
    :disabled="isDisabled"
    @click="onClick"
  >
    <slot name="img-left"></slot>
    {{ label }}
    <slot name="img-right"></slot>
  </button>
</template>

<script setup>
import { defineProps, toRefs, computed } from "vue";

const props = defineProps({
  type: { type: String, default: "button" },
  btnType: {
    type: String,
    default: "primary",
  },
  label: {
    type: String,
    default: "Holi 2",
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  onClick: {
    type: Function,
    required: true,
  },
});

const { type, btnType, label, disabled, onClic } = toRefs(props);

const btnClass = computed(() => {
  return btnType.value;
});
</script>

<style lang="scss" scoped>
@mixin outline-flex {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

@mixin outline-hover {
  opacity: 0.8;
  transition: 0.3s linear 0s;
  color: $color-white;
}

.btn {
  padding: 0.4rem 1rem;
  min-width: 80px;
  border-radius: 2rem;
  transition: all 0.3s linear 0s;
  color: $color-white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    opacity: 0.8;
    transition: 0.3s linear 0s;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
}

.primary {
  background: $btn-gradient-primary;
}

.secondary {
  background: $btn-gradient-secondary;
}

.outline-primary {
  @include outline-flex;
  background: $color-white;
  border: 1px solid $color-primary;
  color: $color-primary;

  &:hover {
    @include outline-hover;
    background: $color-primary;
  }
}

.outline-secondary {
  @include outline-flex;
  background: $color-white;
  border: 1px solid $color-secondary;
  color: $color-secondary;

  &:hover {
    @include outline-hover;
    background: $color-secondary;
  }
}
</style>
