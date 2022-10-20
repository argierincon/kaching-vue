<template>
  <div class="box-transaction" :class="elemsItem.class">
    <svg-icon
      class="box-transaction__icon"
      type="mdi"
      :path="elemsItem.icon"
      :size="18"
    ></svg-icon>
    <p class="box-transaction__name">{{ transactionName }}</p>
    <p v-if="amount" class="box-transaction__amount">{{ currencyAmount }}</p>
  </div>
</template>

<script setup>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiArrowTopRight, mdiArrowBottomRight, mdiMagnify } from "@mdi/js";
import { defineProps, toRefs, reactive, computed } from "vue";
import { currencyFormater } from "/utils/currencyFormater";

const iconIncome = mdiArrowTopRight;
const iconOutcome = mdiArrowBottomRight;
const iconMagnify = mdiMagnify;

const props = defineProps({
  transactionName: {
    type: String,
    default: "transaction name",
  },
  amount: { type: Number, default: 0 },
  transactionType: { type: String, default: "" },
});

const { name, amount, transactionType } = toRefs(props);

const currencyAmount = computed(() => currencyFormater.format(amount.value));
let elemsItem = reactive({
  class: "",
  icon: iconIncome,
});

switch (transactionType.value) {
  case "income":
    elemsItem = {
      class: "income",
      icon: iconIncome,
    };
    break;

  case "outcome":
    elemsItem = {
      class: "outcome",
      icon: iconOutcome,
    };
    break;

  default:
    elemsItem = {
      class: "",
      icon: iconMagnify,
    };
    break;
}
</script>

<style lang="scss" scoped>
.box-transaction {
  padding: 0.8rem;
  width: 100%;
  display: grid;
  grid-template-columns: 20px 1fr;
  align-items: center;
  gap: 0.5rem;
  background-color: $color-white;
  border-radius: 6px;
  border-left: 4px solid $color-primary;
  filter: drop-shadow(0px 0px 1px rgba(23, 43, 77, 0.2));

  &__name,
  &__amount {
    font-size: 0.8rem;

    @include laptop {
      font-size: 1rem;
    }
  }

  &__amount {
    margin-left: auto;
  }
}

.income {
  grid-template-columns: 20px 1fr 100px;
  border-left: 4px solid $color-green;
  color: $color-green;
}

.outcome {
  grid-template-columns: 20px 1fr 100px;
  border-left: 4px solid $color-red;
  color: $color-red;
}
</style>
