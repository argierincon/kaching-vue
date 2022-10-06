<template>
  <button
    type="button"
    :class="`btn ${btnClass}`"
    :disabled="isDisabled"
    @click="onClick"
  >
    {{ label }}
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
    default: () => {
      console.log("HOLI");
    },
  },
});

const { type, btnType, label, disabled, onClic } = toRefs(props);

const btnClass = computed(() => {
  return btnType.value;
});
</script>

<style lang="scss" scoped>
.btn {
  padding: 0.4rem 1rem;
  min-width: 80px;
  border-radius: 2rem;
  transition: all 0.2s linear 0s;
  color: $color-white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    opacity: 0.8;
    transition: 0.2s linear 0s;
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
</style>
