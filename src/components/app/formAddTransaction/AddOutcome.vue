<template>
  <form @submit.prevent="submit" ref="form" class="form-add-transaction">
    <Loader v-if="isLoading" />
    <h4 class="form-add-transaction__title">Registrar gasto</h4>
    <v-select
      label="Tipo de gasto"
      placeholder="Selecciona el tipo"
      v-model="outcomeType"
      required
      hasMiniLabel
    >
      <option v-for="item in outcType" :key="item" class="option" :value="item">
        {{ item }}
      </option>
    </v-select>

    <v-select
      label="Categoría"
      placeholder="Selecciona el tipo"
      v-model="outcomeCategory"
      required
      hasMiniLabel
    >
      <option
        v-for="item in outcomeCategories"
        :key="item"
        class="option"
        :value="item"
      >
        {{ item }}
      </option>
    </v-select>

    <v-input
      label="Nombre del gasto"
      placeholder="Ingresa el nombre"
      v-model="outcomeName"
      required
      hasMiniLabel
    />

    <v-input
      label="Monto"
      placeholder="Ingresa el monto"
      v-model="amount"
      required
      pattern="^\d*(\.\d{0,2})?$"
      hasMiniLabel
    />

    <v-textarea label="Descripción" v-model="description" />

    <div class="form-add-transaction__buttons">
      <Btn label="Volver" btnType="secondary" :onClick="btnCancel" />
      <Btn label="Guardar" type="submit" />
    </div>
  </form>
</template>

<script setup>
import { defineProps, toRefs, ref, reactive, computed } from "vue";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useRouter } from "vue-router";

import { outcomeCategories, outcType } from "../../../../utils/arrCategories";

import Loader from "@/components/public/Loader.vue";
import Btn from "@/components/public/Btn.vue";
import vInput from "@/components/app/inputs/Input.vue";
import vSelect from "@/components/app/inputs/Select.vue";
import vTextarea from "@/components/app/inputs/Textarea.vue";
console.log(outcomeCategories, "outcomeCategories");

const router = useRouter();

const db = getFirestore();
const colRef = collection(db, "transactions");

let isLoading = ref(false);
const form = ref("");
const outcomeType = ref("");
const outcomeCategory = ref("");
const outcomeName = ref("");
const amount = ref(null);
const description = ref("");
const uid = localStorage.getItem("uid");

const dateTr = {
  month: "short",
  day: "numeric",
  year: "numeric",
};

const savedAmount = computed(() => amount.value * -1);

const dataObj = reactive({
  transaction_type: "outcome",
  date: new Date().toString(),
  type: outcomeType,
  category: outcomeCategory,
  name: outcomeName,
  amount: savedAmount,
  description: description,
  holder: "NA",
  uid,
});

const submit = async () => {
  isLoading.value = true;
  const docRef = await addDoc(colRef, Object.assign({}, dataObj));
  isLoading.value = false;

  console.log("Document was created with ID:", docRef.id);

  outcomeType.value = "";
  outcomeCategory.value = "";
  form.value.reset();
};

const btnCancel = () => {
  router.push({ path: "/" });
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/formTransactions.scss";
</style>
