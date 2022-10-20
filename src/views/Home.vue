<template>
  <Layout>
    <template #header>
      <Header />
    </template>

    <template #main-content>
      <section class="home-grid">
        <BalanceBox class="balance" />
        <IncomeOutcomeBox class="income" label="Ingresos" />
        <IncomeOutcomeBox class="outcome" label="Gastos" />
      </section>

      <NavigationTabs class="nav-tabs" :tabs="tabs" />
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/layouts/Default.vue";
import Header from "@/components/public/Header.vue";
import BalanceBox from "@/components/app/BalanceBox.vue";
import IncomeOutcomeBox from "@/components/app/IncomeOutcomeBox.vue";
import NavigationTabs from "@/components/app/NavigationTabs.vue";
import SavingsChart from "@/components/app/homeChart/Index.vue";
import RecentTransactionsSection from "@/components/app/recentTransactions/Index.vue";
import {
  collection,
  getFirestore,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export default {
  components: {
    Layout,
    Header,
    BalanceBox,
    IncomeOutcomeBox,
    NavigationTabs,
  },
  data() {
    return {
      tabs: [
        {
          isActive: true,
          label: "Gráfico de balance",
          component: SavingsChart,
        },
        {
          isActive: false,
          label: "Transacciones recientes",
          component: RecentTransactionsSection,
        },
      ],
    };
  },
  mounted() {
    this.test();
    const name = localStorage.getItem("name");
    console.log(name);
  },
  methods: {
    async test() {
      const uid = localStorage.getItem("uid");
      const db = getFirestore();
      const q = query(collection(db, "incomes"), where("uid", "==", uid));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.home-grid {
  display: grid;
  gap: 1rem;
  grid-template-areas:
    "A A A A   A A A A"
    "B B B B   C C C C"
    "B B B B   C C C C";
}

.balance {
  grid-area: A;
}

.income {
  grid-area: B;
}

.outcome {
  grid-area: C;
}

.nav-tabs {
  margin-top: 1.25rem;
}
</style>
