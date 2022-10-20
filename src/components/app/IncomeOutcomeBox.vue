<template>
  <div class="transaction-box">
    <p class="transaction-box__title">{{ label }}</p>
    <p class="transaction-box__amount">
      {{ currencyFormater.format(amount) }}
    </p>
  </div>
</template>

<script setup>
import { defineProps, toRefs } from "vue";
import { currencyFormater } from "/utils/currencyFormater";

const props = defineProps({
  label: { type: String, default: "Label" },
  amount: { type: Number, default: 0 },
});

const { amount } = toRefs(props);
</script>

<style lang="scss" scoped>
.transaction-box {
  @include violet-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  &__title {
    font-weight: 500;
    @include laptop {
      font-size: 1.1rem;
    }
  }

  &__amount {
    font-weight: 400;

    @include laptop {
      font-size: 1.25rem;
    }
  }
}
</style>
