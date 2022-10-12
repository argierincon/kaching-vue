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
      <option class="option" value="Transferencia">Transferencia</option>
      <option class="option" value="Efectivo">Efectivo</option>
      <option class="option" value="Tarjeta">Tarjeta</option>
    </v-select>

    <v-input
      label="Nombre del gasto"
      placeholder="Ingresa el nombre"
      v-model="outcomeName"
      required
      hasMiniLabel
    />

    <v-input
      type="number"
      label="Monto"
      placeholder="Ingresa el monto"
      v-model="amount"
      required
      hasMiniLabel
    />

    <v-textarea label="Descripción" v-model="description" />

    <div class="form-add-transaction__buttons">
      <Btn label="Cancelar" btnType="secondary" :onClick="btnCancel" />
      <Btn label="Guardar" type="submit" />
    </div>
  </form>
</template>

<script setup>
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { defineProps, toRefs, ref, reactive } from "vue";

import Loader from "@/components/public/Loader.vue";
import Btn from "@/components/public/Btn.vue";
import vInput from "@/components/app/inputs/Input.vue";
import vSelect from "@/components/app/inputs/Select.vue";
import vTextarea from "@/components/app/inputs/Textarea.vue";

const db = getFirestore();
const colRef = collection(db, "outcomes");

const props = defineProps({
  btnCancel: { type: Function, default: () => console.log("PRUEB") },
});
const { btnCancel } = toRefs(props);

let isLoading = ref(false);
const form = ref("");
const outcomeType = ref("");
const outcomeName = ref("");
const amount = ref(null);
const description = ref("");

const dataObj = reactive({
  type: outcomeType,
  name: outcomeName,
  amount: amount,
  description: description,
});

const submit = async () => {
  isLoading.value = true;
  const docRef = await addDoc(colRef, Object.assign({}, dataObj));
  isLoading.value = false;

  console.log("Document was created with ID:", docRef.id);

  btnCancel.value();
  form.value.reset();
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/formTransactions.scss";
</style>
