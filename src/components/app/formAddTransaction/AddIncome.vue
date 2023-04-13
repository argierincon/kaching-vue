<template>
  <form @submit.prevent="submit" ref="form" class="form-add-transaction">
    <Loader v-if="isLoading" />
    <h4 class="form-add-transaction__title">Registrar Ingreso</h4>

    <v-select
      label="Tipo de ingreso"
      placeholder="Selecciona el tipo"
      v-model="incomeType"
      required
      hasMiniLabel
    >
      <option value="Transferencia">Transferencia</option>
      <option value="Efectivo">Efectivo</option>
    </v-select>

    <v-input
      label="Nombre del ingreso"
      placeholder="Ingresa el nombre"
      v-model="incomeName"
      required
      hasMiniLabel
    />

    <v-input
      label="Monto"
      placeholder="Ingresa el monto"
      v-model="amount"
      required
      hasMiniLabel
      pattern="^\d*(\.\d{0,2})?$"
    />

    <v-input
      label="Titular"
      placeholder="Ingresa el titular"
      v-model="holder"
    />

    <v-textarea label="Descripción" v-model="description" />

    <div class="form-add-transaction__buttons">
      <Btn label="Volver" btnType="secondary" :onClick="btnCancel" />
      <Btn label="Guardar" type="submit" />
    </div>
  </form>
</template>

<script setup>
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { defineProps, toRefs, ref, reactive, computed } from "vue";
import { useRouter } from "vue-router";

import Loader from "@/components/public/Loader.vue";
import Btn from "@/components/public/Btn.vue";
import vInput from "@/components/app/inputs/Input.vue";
import vSelect from "@/components/app/inputs/Select.vue";
import vTextarea from "@/components/app/inputs/Textarea.vue";

const router = useRouter();

const db = getFirestore();
const colRef = collection(db, "transactions");

let isLoading = ref(false);
const today = ref(null);
const form = ref("");
const incomeType = ref("");
const incomeName = ref("");
const holder = ref("");
const amount = ref(null);
const description = ref("");

const uid = localStorage.getItem("uid");

const setTodayDate = computed(() => new Date());

const dataObj = reactive({
  transaction_type: "income",
  date: new Date().toString(),
  type: incomeType,
  category: "NA",
  name: incomeName,
  amount: amount,
  description: description,
  holder: holder,
  uid,
});

const submit = async () => {
  isLoading.value = true;
  const docRef = await addDoc(colRef, Object.assign({}, dataObj));
  isLoading.value = false;

  console.log("Document was created with ID:", docRef.id);

  incomeType.value = "";
  form.value.reset();
};

const btnCancel = () => {
  router.push({ path: "/" });
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/formTransactions.scss";
</style>
