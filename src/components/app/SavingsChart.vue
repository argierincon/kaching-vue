<template>
  <section>
    <h6>{{ amountCurrency }}</h6>
  </section>
</template>

<script>
import { currencyFormater } from "/utils/currencyFormater";

export default {
  data() {
    return {
      amount: null,
      totalAmount: 1000,
      currencyFormater,
    };
  },
  computed: {
    showAmount() {
      return this.amount !== null ? this.amount : this.totalAmount;
    },
    amountCurrency() {
      return currencyFormater.format(this.showAmount);
    },
  },
};
</script>
