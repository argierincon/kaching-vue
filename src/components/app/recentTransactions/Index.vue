<template>
  <section class="recent-ransaction-section">
    <RecentTransactionItem
      v-for="item in movements"
      :key="item.id"
      :transactionName="item.transactionName"
      :amount="item.amount"
      :transactionType="item.transactionType"
    />
  </section>
</template>

<script setup>
import RecentTransactionItem from "@/components/app/recentTransactions/RecentTransactionItem.vue";

const movements = [
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
];
</script>

<style lang="scss" scoped>
.recent-ransaction-section {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
</style>
