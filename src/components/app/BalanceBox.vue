<template>
  <div class="balance-box">
    <p class="balance-box__title">BALANCE</p>
    <h6 class="balance-box__amount">{{ currencyFormater.format(balance) }}</h6>
  </div>
</template>

<script setup>
import { defineProps, toRefs } from "vue";
import { currencyFormater } from "/utils/currencyFormater";

const props = defineProps({
  balance: { type: Number, default: 0 },
});

const { balance } = toRefs(props);
</script>

<style lang="scss" scoped>
.balance-box {
  @include violet-box;

  &__title {
    font-weight: 500;
  }

  &__amount {
    margin-top: 0.25rem;
    font-weight: 600;
  }
}
</style>
