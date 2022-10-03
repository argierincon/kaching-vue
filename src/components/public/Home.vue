<template>
  <Layout>
    <template #header>
      <Header />
    </template>

    <template #main-content>
      <section class="home-grid">
        <BalanceBox class="balance" />
        <IncomeOutcomeBox class="income" />
        <IncomeOutcomeBox class="outcome" />
      </section>
      <NavigationTabs class="nav-tabs" :tabs="tabs" />
    </template>

    <template #nav-menu>
      <NavMenu />
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
import NavMenu from "@/components/app/navMenu/Index.vue";

export default {
  components: {
    Layout,
    Header,
    BalanceBox,
    IncomeOutcomeBox,
    NavigationTabs,
    NavMenu,
  },
  data() {
    return {
      tabs: [
        {
          isActive: true,
          label: "Gráfico de ahorro",
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
  methods: {},
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
