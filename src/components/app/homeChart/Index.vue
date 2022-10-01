<template>
  <section class="chart-section">
    <p class="label-saved">Total ahorrado</p>
    <h6 class="amount-saved">{{ amountCurrency }}</h6>
    <Graphic :amounts="listAmounts" />
  </section>
</template>

<script>
import { currencyFormater } from "/utils/currencyFormater";
import Graphic from "@/components/app/homeChart/Graphic.vue";

export default {
  components: { Graphic },
  data() {
    return {
      amount: null,
      totalAmount: 1000,
      currencyFormater,
      listAmounts: [100, 200, 500, 200, -400, -600, -300, 0, 300, 500],
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

<style lang="scss" scoped>
.amount-saved {
  text-align: center;
  color: $color-secondary;
  font-size: 2.25rem;
  font-weight: 600;
}

.label-saved {
  color: $color-black-light;
  font-size: 0.8rem;
  text-align: center;
}
</style>
