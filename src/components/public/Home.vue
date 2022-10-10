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
      <MoblieModal
        :showModal="showModalIncome"
        @close="closeModalIncome"
        closeOutside
      >
        <AddIncome :btnCancel="() => closeModalIncome()" />
      </MoblieModal>
      <MoblieModal
        :showModal="showModalOutcome"
        @close="closeModalOutcome"
        closeOutside
      >
        <AddOutcome :btnCancel="() => closeModalOutcome()" />
      </MoblieModal>
      <NavigationTabs class="nav-tabs" :tabs="tabs" />
    </template>

    <template #nav-menu>
      <NavMenu :optionsMenu="optMenu" />
    </template>
  </Layout>
</template>

<script>
import { mdiHome, mdiCashMinus, mdiCashPlus, mdiCashClock } from "@mdi/js";

import Layout from "@/components/layouts/Default.vue";
import Header from "@/components/public/Header.vue";
import BalanceBox from "@/components/app/BalanceBox.vue";
import IncomeOutcomeBox from "@/components/app/IncomeOutcomeBox.vue";
import NavigationTabs from "@/components/app/NavigationTabs.vue";
import SavingsChart from "@/components/app/homeChart/Index.vue";
import RecentTransactionsSection from "@/components/app/recentTransactions/Index.vue";
import MoblieModal from "@/components/app/modals/MoblieModal.vue";
import AddIncome from "@/components/app/formAddTransaction/AddIncome.vue";
import AddOutcome from "@/components/app/formAddTransaction/AddOutcome.vue";
import NavMenu from "@/components/app/navMenu/Index.vue";

export default {
  components: {
    Layout,
    Header,
    BalanceBox,
    IncomeOutcomeBox,
    NavigationTabs,
    NavMenu,
    AddIncome,
    AddOutcome,
    MoblieModal,
  },
  data() {
    return {
      showModalIncome: false,
      showModalOutcome: false,
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
      optMenu: [
        {
          id: "1",
          icon: mdiHome,
          label: "Inicio",
        },
        {
          id: "2",
          icon: mdiCashPlus,
          label: "Ingreso",
          click: this.closeModalIncome,
        },
        {
          id: "1",
          icon: mdiCashMinus,
          label: "Egreso",
          click: this.closeModalOutcome,
        },
        {
          id: "4",
          icon: mdiCashClock,
          label: "Historial",
        },
      ],
    };
  },
  methods: {
    closeModalIncome() {
      this.showModalIncome = !this.showModalIncome;
    },
    closeModalOutcome() {
      this.showModalOutcome = !this.showModalOutcome;
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
