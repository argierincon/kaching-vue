<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <textarea
      v-model="localModel"
      class="textarea"
      rows="4"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: {
    type: { type: String, default: "text" },
    modelValue: { type: String, default: "" },
    label: { type: String, default: "Label" },
    placeholder: { type: String, default: "Placeholder" },
    required: { type: String, default: false },
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
  },
};
</script>

<style lang="scss" scoped>
.textarea {
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
</style>
