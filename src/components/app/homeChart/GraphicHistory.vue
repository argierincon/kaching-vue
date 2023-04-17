<template>
  <section class="chart-section">
    <p class="label-saved">{{ graphicLabel }}</p>
    <h6 class="amount-saved">
      {{ currencyFormater.format(showAmount) }}
    </h6>
    <Graphic
      v-if="listAmounts.length"
      :amounts="listAmounts"
      @pointSelected="selected"
    />
  </section>
</template>

<script setup>
import {
  collection,
  getFirestore,
  query,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

import { currencyFormater } from "/utils/currencyFormater";
import Graphic from "@/components/app/homeChart/Graphic.vue";
import { ref, computed, watch, onMounted } from "vue";

const amount = ref(null);
const amountObj = ref(null);
const totalAmount = ref(null);
const listAmounts = ref([]);
const listAmountsClean = ref([]);
const transactions = ref([]);
const auth = ref(null);

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const todayDate = new Date().toLocaleDateString("es-MX", options);

const graphicLabel = ref(todayDate);

const getTransactions = async () => {
  auth.value = getAuth();

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

    const allTransactions = rawTransactions.map((ele) => {
      return {
        id: ele.doc_id,
        date: new Date(ele.data.date),
        transactionType: ele.data.transaction_type,
        category: ele.data?.category,
        type: ele.data.type,
        transactionName: ele.data.name,
        amount: parseFloat(ele.data.amount),
        description: ele.data?.description,
        holder: ele.data?.holder,
        uid: ele.data.uid,
      };
    });

    transactions.value = allTransactions.sort((a, b) => {
      return a.date.getTime() - b.date.getTime();
    });

    totalAmount.value = transactions.value.reduce((suma, m) => {
      return suma + m.amount;
    }, 0);

    // Lista de montos transformada para la gráfica
    // const currentMonthDays = transactions.value.filter((m) => {
    //   const currMonth = new Date().getMonth();

    //   return m.date.getMonth() === currMonth;
    // });

    listAmounts.value = transactions.value.map((ele, i) => {
      const lastTransactions = transactions.value.slice(0, i + 1);

      const suma = lastTransactions.reduce((suma, current) => {
        current.sum = suma + current.amount;
        return suma + current.amount;
      }, 0);

      return { suma: suma, date: ele.date };
    });

    amount.value = listAmounts.value.length
      ? listAmounts.value[listAmounts.value.length - 1].suma
      : 0;
  });
};

onMounted(async () => await getTransactions());

const showAmount = computed(() => {
  return amount.value !== null ? amount.value : totalAmount.value;
});

const selected = (pointSelected) => {
  const label = formatingDate(pointSelected);
  graphicLabel.value = `${label[0].toUpperCase()}${label.substring(1)}`;

  amount.value = pointSelected.point;
  amountObj.value = pointSelected;

  if (pointSelected.point === undefined) {
    if (pointSelected.screenPoint < 0) {
      amount.value = listAmounts.value[0].suma;
    } else {
      const last = listAmounts.value.length - 1;
      amount.value = listAmounts.value[last].suma;
    }
  }
};

const formatingDate = (pointSelected) => {
  if (pointSelected.date === undefined) {
    if (pointSelected.screenPoint < 0) {
      return transactions.value[0].date.toLocaleDateString("es-MX", options);
    } else {
      const last = listAmounts.value.length - 1;
      return transactions.value[last].date.toLocaleDateString("es-MX", options);
    }
  }

  return pointSelected.date.toLocaleDateString("es-MX", options);
};

// ULTIMOS 30 DIAS
// const last30Days = transactions.value.filter((m) => {
//   const today = new Date();

//   console.log(today.getMonth(), "T");
//   console.log(m.date.getMonth(), "m.date");

//   const lastDays = today.setDate(today.getDate() - 30);

//   return m.date > lastDays;
// });
</script>

<style lang="scss" scoped>
.amount-saved {
  text-align: center;
  color: $color-secondary;
  font-size: 2.25rem;
  font-weight: 600;

  @include laptop {
    font-size: 2.5rem;
  }
}

.label-saved {
  color: $color-black-light;
  font-size: 0.8rem;
  text-align: center;

  @include laptop {
    font-size: 1rem;
  }
}
</style>
