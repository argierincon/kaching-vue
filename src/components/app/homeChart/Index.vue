<template>
  <section class="chart-section">
    <p class="label-saved">{{ test }}</p>
    <h6 class="amount-saved">{{ currencyFormater.format(showAmount) }}</h6>
    <Graphic :amounts="listAmounts" @pointSelected="selected" />
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
      totalAmount: null,
      currencyFormater,
      movements: [
        {
          id: 1,
          date: new Date("10-02-2022"),
          transactionType: "outcome",
          transactionName: "Almuerzo parrilla",
          amount: -49.2,
        },
        {
          id: 2,
          date: new Date("10-01-2022"),
          transactionType: "outcome",
          transactionName: "Almuerzo ramen",
          amount: -120.0,
        },
        {
          id: 3,
          date: new Date("09-30-2022"),
          transactionType: "income",
          transactionName: "Pago quincena",
          amount: 2697.64,
        },
        {
          id: 4,
          date: new Date("09-30-2022"),
          transactionType: "outcome",
          transactionName: "Almuerzo chaufa y makis",
          amount: -44.7,
        },
        {
          id: 5,
          date: new Date("09-28-2022"),
          transactionType: "outcome",
          transactionName: "Mercado del mes Metro",
          amount: -340.53,
        },
        {
          id: 6,
          date: new Date("09-28-2022"),
          transactionType: "outcome",
          transactionName: "Ahorro en otra cuenta",
          amount: -508.54,
        },
        {
          id: 7,
          date: new Date("09-27-2022"),
          transactionType: "outcome",
          transactionName: "Retiro de efectivo",
          amount: -50.0,
        },
        {
          id: 8,
          date: new Date("09-26-2022"),
          transactionType: "outcome",
          transactionName: "Serv. mantenimiento",
          amount: -160.43,
        },
        {
          id: 9,
          date: new Date("09-26-2022"),
          transactionType: "outcome",
          transactionName: "Gas Calida equivocado",
          amount: -7.2,
        },
        {
          id: 10,
          date: new Date("09-26-2022"),
          transactionType: "outcome",
          transactionName: "Enel",
          amount: -31.0,
        },
        {
          id: 11,
          date: new Date("09-26-2022"),
          transactionType: "outcome",
          transactionName: "Cena Rokys",
          amount: -54.7,
        },
        {
          id: 11,
          date: new Date("09-26-2022"),
          transactionType: "outcome",
          transactionName: "Venezuela",
          amount: -250.0,
        },
      ],
      test: "TEST",
    };
  },
  computed: {
    showAmount() {
      return this.amount !== null ? this.amount : this.totalAmount;
    },
    amountCurrency() {
      return currencyFormater.format(this.showAmount);
    },
    listAmounts() {
      const last30Days = this.movements
        .filter((m) => {
          const today = new Date();
          const lastDays = today.setDate(today.getDate() - 30);

          return m.date > lastDays;
        })
        .map((m) => m.amount);

      return last30Days.map((m, i) => {
        const lastMovements = last30Days.slice(0, i + 1);

        return lastMovements.reduce((suma, current) => {
          return suma + current;
        }, 0);
      });
    },
    totalAmount() {
      return this.movements.reduce((suma, m) => {
        return suma + m.amount;
      }, 0);
    },
  },
  mounted() {
    this.amount = this.listAmounts[this.listAmounts.length - 1];
  },
  methods: {
    selected(pointSelected) {
      this.amount = pointSelected;

      if (pointSelected === undefined) {
        this.amount = this.listAmounts[0];
      }
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
