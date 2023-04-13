<template>
  <div class="box-tr" :class="elemsItem.class">
    <article class="box-transaction">
      <div class="box-transaction__div">
        <svg-icon
          class="box-transaction__icon"
          type="mdi"
          :path="elemsItem.icon"
          :size="18"
        ></svg-icon>
        <p class="box-transaction__name">{{ transactionName }}</p>
      </div>
      <p v-show="amount" class="box-transaction__amount">
        {{ currencyAmount }}
      </p>
    </article>
    <div class="transaction-tag" v-show="amount">
      <p class="date">{{ date }}</p>
      <p class="tag" :class="elemsItem.tag">{{ trMode }}</p>
    </div>
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
  trMode: { type: String },
  transactionType: { type: String, default: "" },
});

const { name, amount, transactionType, trMode } = toRefs(props);

const currencyAmount = computed(() => currencyFormater.format(amount.value));
let elemsItem = reactive({
  class: "",
  icon: mdiMagnify,
});

switch (transactionType.value) {
  case "income":
    elemsItem = {
      class: "income",
      tag: "tag-income",
      icon: mdiArrowTopRight,
    };
    break;

  case "outcome":
    elemsItem = {
      class: "outcome",
      tag: "tag-outcome",
      icon: mdiArrowBottomRight,
    };
    break;

  default:
    elemsItem = {
      class: "",
      tag: "",
      icon: mdiMagnify,
    };
    break;
}
</script>

<style lang="scss" scoped>
.box-tr {
  padding: 10px 12px 10px 8px;
  background-color: $color-white;
  border-radius: 6px;
  border-left: 4px solid $color-primary;
  filter: drop-shadow(0px 0px 1px rgba(23, 43, 77, 0.2));

  @include tablet {
    padding: 0.8rem;
  }
}

.box-transaction {
  width: 100%;

  @include tablet {
    display: grid;
    grid-template-columns: 1fr 100px;
    gap: 0.5rem;
  }

  &__div {
    display: flex;
    gap: 0.5rem;
  }

  &__name,
  &__amount {
    font-size: 0.8rem;
    font-weight: 500;

    @include laptop {
      font-size: 1rem;
    }
  }

  &__amount {
    width: fit-content;
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

.transaction-tag {
  margin-top: 2px;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 6px;
}

.tag {
  padding: 1px 0.75em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-size: 11px;
}

.tag-income {
  background-color: #d7f8e9;
  color: $color-green-variant;
}

.tag-outcome {
  background-color: #feecf0;
  color: $color-red;
}

.date {
  font-size: 11px;
  width: fit-content;

  @include laptop {
    font-size: 13px;
  }
}
</style>
