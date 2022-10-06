<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <textarea
      class="textarea"
      name=""
      id=""
      rows="4"
      :placeholder="placeholder"
      :disabled="disabled"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: {
    type: { type: String, default: "text" },
    vmodel: { type: String, default: "" },
    label: { type: String, default: "Label" },
    placeholder: { type: String, default: "Placeholder" },
    disabled: { type: String, default: false },
  },
};
</script>

<style lang="scss" scoped>
.field {
  @include field-styles;
}

.label {
  @include label-field;
}

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
