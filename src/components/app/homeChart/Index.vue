<template>
  <section class="chart-section">
    <p class="label-saved">{{ graphicLabel }}</p>
    <h6 class="amount-saved">
      {{ currencyFormater.format(showAmount) }}
    </h6>
    {{ listAmounts }}
    <Graphic :amounts="listAmounts" @pointSelected="selected" />
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
import { ref, computed } from "vue";

const graphicLabel = ref("Disponible a la fecha");
const amount = ref(null);
const totalAmount = ref(null);
const listAmounts = ref([]);
const transactions = ref([]);
const auth = ref(null);

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
    console.log("ME EJECUTE");
    const rawTransactions = [];
    querySnapshot.forEach((doc) => {
      rawTransactions.push({ doc_id: doc.id, data: doc.data() });
    });

    transactions.value = rawTransactions.map((ele) => {
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
    });

    totalAmount.value = transactions.value.reduce((suma, m) => {
      return suma + m.amount;
    }, 0);

    // Lista de montos transformada para la gráfica
    const last30Days = transactions.value.filter((m) => {
      const today = new Date();
      const lastDays = today.setDate(today.getDate() - 30);

      console.log(m, "M>DATE");

      console.log(new Date(m.date).getDate(), "getDate");

      return m.date > lastDays;
    });

    listAmounts.value = last30Days.map((_, i) => {
      const lastTransactions = last30Days.slice(0, i + 1);

      return lastTransactions.reduce((suma, current) => {
        current.sum = suma + current.amount;
        return suma + current.amount;
      }, 0);
    });

    amount.value = listAmounts.value.length
      ? listAmounts.value[listAmounts.value.length - 1]
      : 0;

    console.log("FIN DE LA EJECUCION");
  });
};

await getTransactions();

const showAmount = computed(() => {
  return amount.value !== null ? amount.value : totalAmount.value;
});

const selected = (pointSelected) => {
  const label = formatingDate(pointSelected);

  // console.log(pointSelected);
  graphicLabel.value = `${label[0].toUpperCase()}${label.substring(1)}`;
  // console.log(graphicLabel.value, "graphicLabel.value ");

  amount.value = pointSelected;
  if (amount.value === undefined) amount.value = listAmounts.value[0];
};

const formatingDate = (pointSelected) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  if (pointSelected === undefined) {
    return transactions.value[0].date.toLocaleDateString("es-MX", options);
  }

  const a = transactions.value.find((ele) => ele.sum === pointSelected);

  console.log(a, "AAAA");
  return transactions.value
    .find((ele) => ele.sum === pointSelected)
    .date.toLocaleDateString("es-MX", options);
};
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
