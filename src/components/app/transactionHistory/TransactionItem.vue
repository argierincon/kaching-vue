<template>
  <article class="item-transaction" :class="type">
    <button class="ellipsis-icon">
      <svg-icon type="mdi" size="20" :path="mdiDotsVertical"></svg-icon>
    </button>
    <div class="item-transaction__header">
      <svg-icon
        class="close-icon"
        type="mdi"
        size="20"
        :path="mdiFood"
      ></svg-icon>
      <p class="transaction-title">{{ title }}</p>
      <p class="transaction-amount">{{ currencyAmount }}</p>
    </div>
    <div v-show="description" class="item-transaction__content">
      <p>
        {{ description }}
      </p>
    </div>
  </article>
</template>

<script setup>
import { defineProps, toRefs, computed } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiFood, mdiDotsVertical } from "@mdi/js";

import { currencyFormater } from "/utils/currencyFormater";

const props = defineProps({
  type: { type: String },
  title: { type: String },
  amount: { type: String },
  description: { type: String },
});

const { type, title, amount, description } = toRefs(props);

const currencyAmount = computed(() => currencyFormater.format(amount.value));
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
      font-weight: 500;
      font-size: 0.9rem;
    }
  }

  &__content {
    margin-top: 0.5rem;

    p {
      font-size: 0.8rem;
      font-weight: 300;
      color: $color-black-blue;
    }
  }
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
</style>
