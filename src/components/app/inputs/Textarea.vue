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
import inputsMixin from "@/mixins/inputsMixin.js";

export default {
  mixins: [inputsMixin],
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
