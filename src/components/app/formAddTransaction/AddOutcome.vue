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
      <option class="option" value="Tarjeta">Tarjeta de débito</option>
      <option class="option" value="Tarjeta">Tarjeta de crédito</option>
    </v-select>

    <v-select
      label="Categoría"
      placeholder="Selecciona el tipo"
      v-model="outcomeCategory"
      required
      hasMiniLabel
    >
      <option class="option" value="Arrendamiento">Arrendamiento</option>
      <option class="option" value="Víveres">Retiro</option>
      <option class="option" value="Víveres">Víveres</option>
      <option class="option" value="Comida">Restaurantes y hoteles</option>
      <option class="option" value="Transporte">Transporte</option>
      <option class="option" value="Servicios basicos">
        Servicios basicos
      </option>
      <option class="option" value="Servicios generales">
        Servicios generales
      </option>
      <option class="option" value="Imprevistos">Imprevistos</option>
      <option class="option" value="Ropa">Ropa y calzado</option>
      <option class="option" value="Decoración">Decoración hogar</option>
      <option class="option" value="Cuidado personal">Cuidado personal</option>
      <option class="option" value="Artículos de deporte">
        Artículos de deporte
      </option>
      <option class="option" value="Medicina y salud">Medicina y salud</option>
      <option class="option" value="Telecomunicaciones">
        Telecomunicaciones
      </option>
      <option class="option" value="Educación">Educación</option>
      <option class="option" value="Ahorro">Ahorro</option>
      <option class="option" value="Cuota TDC">Cuota TDC</option>
      <option class="option" value="Reparaciones">Reparaciones</option>
      <option class="option" value="Entretenimiento y ocio">
        Entretenimiento y ocio
      </option>
      <option class="option" value="Cuidado del hogar">
        Reparaciones y cuidado del hogar
      </option>
      <option class="option" value="Remesas">Remesas</option>
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
import { defineProps, toRefs, ref, reactive, computed } from "vue";

import Loader from "@/components/public/Loader.vue";
import Btn from "@/components/public/Btn.vue";
import vInput from "@/components/app/inputs/Input.vue";
import vSelect from "@/components/app/inputs/Select.vue";
import vTextarea from "@/components/app/inputs/Textarea.vue";

const db = getFirestore();
const colRef = collection(db, "transactions");

const props = defineProps({
  btnCancel: { type: Function, default: () => console.log("PRUEB") },
});
const { btnCancel } = toRefs(props);

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

  btnCancel.value();
  form.value.reset();
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/formTransactions.scss";
</style>
