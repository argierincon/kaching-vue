<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <input
      class="input"
      v-model="localModel"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
    />
  </div>
</template>

<script>
export default {
  props: {
    type: { type: String, default: "text" },
    modelValue: { type: String, default: "" },
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
      this.modelValue === null ? "is-empty" : "";
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  @include standard-inputs;
  @include inset-shadow-inputs;
  width: 100%;

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
}

.field.is-floating-in-label,
.field.is-floating-label {
  position: relative;
}

.field.is-floating-label .label {
  top: -0.775em;
  padding-left: 0.125em;
  padding-right: 0.125em;

  position: absolute;
  left: 1em;
  font-size: 0.75rem;
  z-index: 5;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: calc(100% - 2em);
  overflow: hidden;
}

.field.is-floating-label .label:before {
  content: "";
  display: block;
  position: absolute;
  top: 0.775em;
  left: 0;
  right: 0;
  height: 0.375em;
  background-color: #fff;
  z-index: -1;
}
</style>
