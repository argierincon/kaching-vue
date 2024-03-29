<template>
  <article
    class="item-transaction"
    :class="{
      'mb-tr': !description,
      income: type === 'income',
      outcome: type === 'outcome',
    }"
  >
    <!-- <button v-show="amount" class="ellipsis-icon">
      <svg-icon type="mdi" size="20" :path="mdiDotsVertical"></svg-icon>
    </button> -->
    <div v-show="amount" class="item-transaction__header">
      <svg-icon type="mdi" size="20" :path="elemsItem.icon"></svg-icon>
      <p class="transaction-title">{{ title }}</p>
      <p class="transaction-amount">{{ currencyAmount }}</p>
    </div>
    <p class="transaction-date">{{ date }}</p>
    <div v-if="!amount" class="content-default">
      <svg-icon type="mdi" size="20" :path="mdiMagnify"></svg-icon>
      <p>{{ description }}</p>
    </div>
    <div v-else class="item-transaction__content">
      <p>{{ description }}</p>
    </div>
  </article>
</template>

<script setup>
import { defineProps, toRefs, computed, reactive } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import {
  mdiDotsVertical,
  mdiArrowTopRight,
  mdiArrowBottomRight,
  mdiMagnify,
} from "@mdi/js";

import { currencyFormater } from "/utils/currencyFormater";

const props = defineProps({
  type: { type: String },
  title: { type: String },
  amount: { type: String },
  date: { type: String },
  description: { type: String },
});

const { type, title, amount, description } = toRefs(props);

const currencyAmount = computed(() => currencyFormater.format(amount.value));

let elemsItem = reactive({
  class: "",
  icon: mdiMagnify,
});

switch (type.value) {
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
.item-transaction {
  padding: 1rem;
  position: relative;
  border-radius: 6px;
  background: #e6f9ff;
  color: #015f9d;

  &:not(:last-child) {
    margin-bottom: 0.75rem;
  }

  &__header {
    display: grid;
    grid-template-columns: 20px 1fr auto 10px;
    align-items: center;
    gap: 0.5rem;

    @include tablet {
      grid-template-columns: 20px 1fr auto 15px;
    }

    p {
      font-weight: 600;
      font-size: 0.9rem;

      @include laptop {
        font-size: 1rem;
      }
    }
  }

  &__content {
    margin-top: 0.5rem;

    p {
      font-size: 0.8rem;
      font-weight: 300;
      color: $color-black-blue;

      @include laptop {
        font-size: 0.9rem;
      }
    }
  }
}

.mb-tr {
  padding-bottom: 6px !important;
}

.content-default {
  display: flex;
  gap: 0.5rem;
}

.outcome {
  background: $bg-color-red;
  color: $color-red;
}

.income {
  background: $bg-color-green;
  color: $color-green;
}

.ellipsis-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: transparent;
  color: $color-black-blue;
}

.transaction-title {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.transaction-amount {
  margin-left: auto;
}

.transaction-date {
  font-size: 11px;
  width: fit-content;
  margin-left: auto;
  margin-top: 2px;
}
</style>
