<template>
  <div class="box-tr" :class="elemsItem.class">
    <article class="box-transaction">
      <svg-icon
        class="box-transaction__icon"
        type="mdi"
        :path="elemsItem.icon"
        :size="18"
      ></svg-icon>
      <p class="box-transaction__name">{{ transactionName }}</p>
      <p v-show="amount" class="box-transaction__amount">
        {{ currencyAmount }}
      </p>
    </article>
    <p class="transaction-date">{{ date }}</p>
  </div>
</template>

<script setup>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiArrowTopRight, mdiArrowBottomRight, mdiMagnify } from "@mdi/js";
import { defineProps, toRefs, reactive, computed } from "vue";
import { currencyFormater } from "/utils/currencyFormater";

const props = defineProps({
  transactionName: {
    type: String,
    default: "transaction name",
  },
  amount: { type: Number, default: 0 },
  date: { type: String },
  transactionType: { type: String, default: "" },
});

const { name, amount, transactionType } = toRefs(props);

const currencyAmount = computed(() => currencyFormater.format(amount.value));
let elemsItem = reactive({
  class: "",
  icon: mdiMagnify,
});

switch (transactionType.value) {
  case "income":
    elemsItem = {
      class: "income",
      icon: mdiArrowTopRight,
    };
    break;

  case "outcome":
    elemsItem = {
      class: "outcome",
      icon: mdiArrowBottomRight,
    };
    break;

  default:
    elemsItem = {
      class: "",
      icon: mdiMagnify,
    };
    break;
}
</script>

<style lang="scss" scoped>
.box-tr {
  padding: 0.8rem;
  background-color: $color-white;
  border-radius: 6px;
  border-left: 4px solid $color-primary;
  filter: drop-shadow(0px 0px 1px rgba(23, 43, 77, 0.2));
}

.box-transaction {
  width: 100%;
  display: grid;
  // grid-template-columns: 20px 1fr;
  // grid-template-columns: 20px 1fr 100px;
  grid-template-columns: 20px 1fr 100px;
  align-items: center;
  gap: 0.5rem;

  &__name,
  &__amount {
    font-size: 0.8rem;
    font-weight: 500;

    @include laptop {
      font-size: 1rem;
    }
  }

  &__amount {
    margin-left: auto;
  }
}

.income {
  border-left: 4px solid $color-green-variant;
  color: $color-green-variant;
}

.outcome {
  border-left: 4px solid $color-red;
  color: $color-red;
}

.transaction-date {
  font-size: 11px;
  width: fit-content;
  margin-left: auto;
  margin-top: 2px;
}
</style>
