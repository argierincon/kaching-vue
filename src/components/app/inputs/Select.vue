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
    <div class="box-select">
      <select
        class="select"
        :class="{ 'is-empty': isEmpty }"
        v-model="localModel"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
      >
        <option v-if="localModel === ''" value="" disabled hidden>
          {{ placeholder }}
        </option>
        <slot />
      </select>
    </div>
  </div>
</template>

<script>
import inputsMixin from "@/mixins/inputsMixin.js";

export default {
  mixins: [inputsMixin],
  computed: {
    isEmpty() {
      return this.modelValue === "" ? "is-empty" : "";
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
  @include standard-inputs;
  padding-right: 2.5em;
  width: 100%;
  position: relative;
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
  cursor: pointer;

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

.is-danger {
  &::after {
    border: 3px solid #f14668;
    border-right: 0;
    border-top: 0;
    border-radius: 2px;
  }

  .select {
    border-color: #f14668;
  }
}

.msg-warning {
  transition: all 0.3s ease;
  display: block;
  color: #f14668;
  font-size: 0.75rem;
  margin-top: 0.15rem;
}
</style>
