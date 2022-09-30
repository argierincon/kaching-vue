<template>
  <div :class="`box-transaction ${propItem.class}`">
    <svg-icon
      class="box-transaction__icon"
      type="mdi"
      :path="propItem.icon"
      :size="18"
    ></svg-icon>
    <p class="box-transaction__description">{{ description }}</p>
    <p class="box-transaction__amount">{{ propItem.amount }}</p>
  </div>
</template>

<script setup>
import { defineProps, toRefs, computed } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiArrowTopRight } from "@mdi/js";
import { mdiArrowBottomRight } from "@mdi/js";
import { currencyFormater } from "/utils/currencyFormater";

const iconIncome = mdiArrowTopRight;
const iconOutcome = mdiArrowBottomRight;

const props = defineProps({
  description: {
    type: String,
    default: "Description",
  },
  amount: { type: Number, default: 100 },
  transactionType: { type: String, default: "income" },
});

const { description, amount, transactionType } = toRefs(props);

const currencyAmount = computed(() => currencyFormater.format(amount.value));

const propItem =
  transactionType.value === "income"
    ? {
        class: "box-transaction--income",
        icon: iconIncome,
        amount: `+ ${currencyAmount.value}`,
      }
    : {
        class: "box-transaction--outcome",
        icon: iconOutcome,
        amount: `- ${currencyAmount.value}`,
      };
</script>

<style lang="scss" scoped>
.box-transaction {
  padding: 0.8rem;
  width: 100%;
  display: grid;
  grid-template-columns: 20px 1fr 100px;
  align-items: center;
  gap: 0.5rem;
  background-color: $color-white;
  border-radius: 6px;
  border-left: 4px solid #333;
  filter: drop-shadow(0px 0px 1px rgba(23, 43, 77, 0.2));

  &__icon {
    font-size: 12px;
  }

  &__description,
  &__amount {
    font-size: 0.8rem;
  }

  &__amount {
    margin-left: auto;
  }

  &--income {
    border-left: 4px solid $color-green;
    color: $color-green;
  }

  &--outcome {
    border-left: 4px solid $color-red;
    color: $color-red;
  }
}
</style>
