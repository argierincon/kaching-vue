<template>
  <section class="home-main">
    <div class="main-left">
      <div class="home-grid">
        <BalanceBox class="balance" :balance="balance" />
        <IncomeOutcomeBox class="income" label="Ingresos" :amount="income" />
        <IncomeOutcomeBox class="outcome" label="Gastos" :amount="outcome" />
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

<script>
import Layout from "@/components/layouts/Default.vue";
import BalanceBox from "@/components/app/BalanceBox.vue";
import IncomeOutcomeBox from "@/components/app/IncomeOutcomeBox.vue";
import NavigationTabs from "@/components/app/NavigationTabs.vue";
import SavingsChart from "../components/app/homeChart/Index.vue";
import RecentTransactionsSection from "@/components/app/recentTransactions/Index.vue";

import {
  collection,
  getFirestore,
  query,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

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
      auth: null,
      transactions: [],
      balance: null,
      outcome: null,
      income: null,
    };
  },
  async created() {
    await this.getTransactions();
  },
  methods: {
    async getTransactions() {
      this.auth = getAuth();
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

        this.transactions = rawTransactions
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
          })
          .filter((tr) => {
            const currMonth = new Date().getMonth();
            return tr.date.getMonth() === currMonth;
          });

        this.income = this.transactions
          .filter((ele) => ele.transactionType === "income")
          .reduce((suma, current) => {
            suma += current.amount;
            return suma;
          }, 0);

        this.outcome = this.transactions
          .filter((ele) => ele.transactionType === "outcome")
          .reduce((suma, current) => {
            suma += current.amount * -1;
            return suma;
          }, 0);

        this.balance = this.income - this.outcome;
      });
    },
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
