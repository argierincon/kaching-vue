<template>
  <Layout>
    <template #main-content>
      <section class="home-main">
        <div class="main-left">
          <div class="home-grid">
            <BalanceBox class="balance" />
            <IncomeOutcomeBox class="income" label="Ingresos" />
            <IncomeOutcomeBox class="outcome" label="Gastos" />
          </div>

          <NavigationTabs class="nav-tabs" :tabs="tabs" />

          <SavingsChart class="tab-desktop home-chart" />
        </div>

        <div class="tab-desktop">
          <h4 class="title">Transacciones recientes</h4>
          <RecentTransactionsSection class="transactions-home" />
        </div>
      </section>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/layouts/Default.vue";
import BalanceBox from "@/components/app/BalanceBox.vue";
import IncomeOutcomeBox from "@/components/app/IncomeOutcomeBox.vue";
import NavigationTabs from "@/components/app/NavigationTabs.vue";
import SavingsChart from "@/components/app/homeChart/Index.vue";
import RecentTransactionsSection from "@/components/app/recentTransactions/Index.vue";

export default {
  components: {
    Layout,
    BalanceBox,
    IncomeOutcomeBox,
    NavigationTabs,
    SavingsChart,
    RecentTransactionsSection,
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
};
</script>

<style lang="scss" scoped>
.home-main {
  @include laptop {
    display: grid;
    grid-template-columns: 40% 50%;
    justify-content: center;
    gap: 4rem;
  }
}

.home-grid {
  display: grid;
  gap: 1rem;
  grid-template-areas:
    "A A A A   A A A A"
    "B B B B   C C C C";

  @include laptop {
    margin-bottom: 3rem;
    grid-template-rows: repeat(2, 100px);
  }
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

  @include laptop {
    display: none;
  }
}

.tab-desktop {
  display: none;

  @include laptop {
    display: block;
  }
}

.title {
  margin-bottom: 1.25rem;
  color: $color-primary;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 500;
}

.transactions-home {
  height: calc(100vh - 230px);
  max-width: 80%;
  padding: 2px;
  margin: auto;
  overflow-y: auto;
}

.home-chart {
  margin: auto;
  max-width: 75%;
}
</style>
