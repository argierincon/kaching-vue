<template>
  <Layout>
    <template #main-content>
      <h4 class="title">Historial de transacciones</h4>
      <section class="transaction-history">
        <Loader v-if="isLoading" />
        <TransactionItem
          v-show="!transactions.length"
          description="No hay transacciones registradas"
        />
        <TransactionItem
          v-for="item in transactions"
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
import {
  collection,
  getFirestore,
  query,
  where,
  orderBy,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

import Layout from "@/components/layouts/Default.vue";
import Loader from "@/components/public/Loader.vue";
import TransactionItem from "@/components/app/transactionHistory/TransactionItem.vue";

let isLoading = ref(true);
let transactions = ref([]);

onMounted(async () => {
  getTransactions();
  isLoading.value = false;
});

const getTransactions = async () => {
  getAuth();
  const uid = localStorage.getItem("uid");
  const db = getFirestore();
  const q = query(
    collection(db, "transactions"),
    where("uid", "==", uid),
    orderBy("date", "desc")
  );

  onSnapshot(q, (querySnapshot) => {
    const rawTransactions = [];
    querySnapshot.forEach((doc) => {
      rawTransactions.push({ doc_id: doc.id, data: doc.data() });
    });

    transactions.value = rawTransactions
      .map((ele) => {
        return {
          id: ele.doc_id,
          date: new Date(ele.data.date),
          transactionType: ele.data.transaction_type,
          category: ele.data?.category,
          type: ele.data.type,
          transactionName: ele.data.name,
          amount: ele.data.amount,
          description: ele.data?.description,
          holder: ele.data?.holder,
          uid: ele.data.uid,
        };
      })
      .sort((a, b) => {
        return b.date.getDate() - a.date.getDate();
      });
  });
};
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
