<template>
  <Layout>
    <template #header>
      <Header />
    </template>

    <template #main-content>
      <section class="home-grid">
        <BalanceBox class="balance" />
        <TransactionBox class="income" />
        <TransactionBox class="outcome" />
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
import TransactionBox from "@/components/app/TransactionBox.vue";
import NavMenu from "@/components/app/NavMenu.vue";
import NavigationTabs from "@/components/app/NavigationTabs.vue";

export default {
  components: {
    Layout,
    Header,
    BalanceBox,
    TransactionBox,
    NavigationTabs,
    NavMenu,
  },
  data() {
    return {
      tabs: [
        {
          isActive: true,
          label: "Total ahorrado",
          component: BalanceBox,
        },
        {
          isActive: false,
          label: "Actividad reciente",
          component: TransactionBox,
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
