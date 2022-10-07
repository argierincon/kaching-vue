<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div class="box-select">
      <select
        :class="{ select: true, 'is-empty': isEmpty }"
        v-model="localModel"
        :placeholder="placeholder"
        :disabled="disabled"
      >
        <option v-if="localModel === null" :value="null" disabled hidden>
          {{ placeholder }}
        </option>
        <slot />
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: { type: String },
    label: { type: String, default: "Label" },
    placeholder: { type: String, default: "Placeholder" },
    disabled: { type: String, default: false },
  },
  computed: {
    localModel: {
      get() {
        return this.modelValue;
      },
      set(newValue) {
        this.$emit("update:modelValue", newValue);
      },
    },
    isEmpty() {
      console.log(this.modelValue, "modelValue");
      return this.modelValue === null ? "is-empty" : "";
    },
  },
};
</script>

<style lang="scss" scoped>
.box-select {
  position: relative;
  width: 100%;

  &::after {
    right: 1.125em;
    z-index: 1;
    border: 3px solid $color-primary;
    border-radius: 2px;
    border-right: 0;
    border-top: 0;
    content: " ";
    display: block;
    height: 0.625em;
    width: 0.625em;
    margin-top: -0.4rem;
    top: 50%;
    pointer-events: none;
    position: absolute;
    transform: rotate(-45deg);
    transform-origin: center;
  }
}

.select {
  cursor: pointer;

  @include standard-inputs;
  width: 100%;
  position: relative;
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;

  &::-ms-expand {
    display: none;
  }

  &:hover {
    @include inputs-hover;
  }

  &:active,
  &:focus {
    @include inputs-active-focus;
  }

  &:disabled {
    @include inputs-disabled;
  }

  &.is-empty {
    color: #b5b5b5;
  }
}
</style>
