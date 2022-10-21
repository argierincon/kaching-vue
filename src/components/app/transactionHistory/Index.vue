<template>
  <Layout>
    <template #main-content>
      <h4 class="title">Historial de transacciones</h4>
      <section class="transaction-history">
        <Loader v-if="isLoading" />
        <TransactionItem
          v-show="!movements.length"
          description="No hay transacciones registradas"
        />
        <TransactionItem
          v-for="item in movements"
          :key="item.id"
          :type="item.transactionType"
          :title="item.transactionName"
          :amount="item.amount"
          :description="item.description"
        />
      </section>
    </template>
  </Layout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import getTransactions from "@/model/getTransactions";
import Layout from "@/components/layouts/Default.vue";
import Loader from "@/components/public/Loader.vue";
import TransactionItem from "@/components/app/transactionHistory/TransactionItem.vue";

const movements = ref([]);
let isLoading = ref(true);

onMounted(async () => {
  movements.value = await getTransactions();
  isLoading.value = false;
});
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 2rem;
  color: $color-primary;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;

  @include tablet {
    font-size: 1.2rem;
  }
}

.transaction-history {
  position: relative;
  @include laptop {
    height: calc(100vh - 240px);
    max-width: 70%;
    padding: 2px;
    margin: auto;
    overflow-y: auto;
  }
}
</style>
