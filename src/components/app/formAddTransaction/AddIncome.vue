<template>
  <form @submit.prevent="submit" ref="form" class="form-add-transaction">
    <h4 class="form-add-transaction__title">Registrar Ingreso</h4>
    <v-select
      label="Tipo de ingreso"
      placeholder="Selecciona el tipo de ingreso"
      v-model="incomeType"
      required
      hasMiniLabel
    >
      <option class="option" value="Transferencia">Transferencia</option>
      <option class="option" value="Efectivo">Efectivo</option>
    </v-select>
    <v-input
      label="Titular"
      placeholder="Ingresa el titular"
      v-model="holder"
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
import { defineProps, toRefs, ref } from "vue";
import Btn from "@/components/public/Btn.vue";
import vInput from "@/components/app/inputs/Input.vue";
import vSelect from "@/components/app/inputs/Select.vue";
import vTextarea from "@/components/app/inputs/Textarea.vue";

const props = defineProps({
  btnCancel: { type: Function, default: () => console.log("PRUEB") },
});

const { btnCancel } = toRefs(props);

const form = ref("");
const incomeType = ref("");
const holder = ref("");
const amount = ref(null);
const description = ref("");

const submit = () => {
  btnCancel.value();
  form.value.reset();
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/formTransactions.scss";
</style>
