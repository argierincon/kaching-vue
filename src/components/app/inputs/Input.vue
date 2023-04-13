<template>
  <div class="field">
    <label class="label"
      >{{ label }}
      <span
        v-show="hasMiniLabel"
        class="mini-label"
        :class="miniLabelElems.class"
      >
        {{ miniLabelElems.label }}
      </span>
    </label>
    <input
      class="input"
      v-model="localModel"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :pattern="pattern"
    />
  </div>
</template>

<script>
import inputsMixin from "@/mixins/inputsMixin.js";

export default {
  mixins: [inputsMixin],
  props: {
    type: { type: String, default: "text" },
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

/* Chrome, Safari, Edge, Opera */
.input::-webkit-outer-spin-button,
.input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
.input[type="number"] {
  -moz-appearance: textfield;
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
