<template>
  <transition name="fade">
    <section class="recent-ransaction-section">
      <RecentTransactionItem
        v-if="!transactions.length"
        transactionName="No hay transacciones recientes."
      />

      <RecentTransactionItem
        v-for="item in transactions"
        :key="item.id"
        :transactionName="item.transactionName"
        :amount="item.amount"
        :transactionType="item.transactionType"
      />
      <Loader v-if="isLoading" />
    </section>
  </transition>
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

import Loader from "@/components/public/Loader.vue";
import RecentTransactionItem from "@/components/app/recentTransactions/RecentTransactionItem.vue";

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
.recent-ransaction-section {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
</style>
