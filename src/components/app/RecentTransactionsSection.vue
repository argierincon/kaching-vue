<template>
  <section class="recent-ransaction-section">
    <RecentTransactionItem
      v-for="item in movements"
      :key="item.id"
      :description="item.description"
      :amount="item.amount"
      :transactionType="item.transactionType"
    />
  </section>
</template>

<script setup>
import RecentTransactionItem from "@/components/app/RecentTransactionItem.vue";

const movements = [
  {
    id: 1,
    transactionType: "income",
    description: "Almuerzo",
    amount: 400,
  },
  {
    id: 2,
    transactionType: "outcome",
    description: "Cena",
    amount: 400,
  },
  {
    id: 3,
    transactionType: "outcome",
    description: "Uniformes",
    amount: 400,
  },
  {
    id: 4,
    transactionType: "outcome",
    description: "Almuerzo",
    amount: 400,
  },
  {
    id: 5,
    transactionType: "income",
    description: "Almuerzo",
    amount: 400,
  },
  {
    id: 6,
    transactionType: "income",
    description: "Almuerzo",
    amount: 400,
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
