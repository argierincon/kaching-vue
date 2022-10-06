<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div class="box-select">
      <select
        class="select"
        name="tipo"
        v-model="vmodel"
        :placeholder="placeholder"
        :disabled="disabled"
      >
        <option class="option" value="">Transferencia</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
  position: relative;
}

.label {
  @include label-field;
}

.box-select {
  width: 100%;

  &::after {
    right: 1.125em;
    z-index: 1;
    border: 3px solid  $color-primary;
    border-radius: 2px;
    border-right: 0;
    border-top: 0;
    content: " ";
    display: block;
    height: 0.625em;
    width: 0.625em;
    margin-top: 0.6rem;
    top: 50%;
    pointer-events: none;
    position: absolute;
    transform: rotate(-45deg);
    transform-origin: center;
  }
}

.select {
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
}

.option {
  width: 100%;
  padding: calc(0.5em - 1px) calc(0.75em - 1px);
}
</style>
