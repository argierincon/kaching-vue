<template>
  <form @submit.prevent="submit" ref="form" class="form-add-transaction">
    <h4 class="form-add-transaction__title">Registrar Ingreso</h4>
    <Select label="Tipo de ingreso" v-model="incomeType">
      <option class="option" value="Transferencia">Transferencia</option>
      <option class="option" value="Efectivo">Efectivo</option>
    </Select>
    <Input label="Titular" placeholder="Ingresa el titular" v-model="holder" />
    <Input
      type="number"
      label="Monto"
      placeholder="Ingresa el monto"
      v-model="amount"
    />
    <Textarea label="Descripción" v-model="description" />

    <div class="form-add-transaction__buttons">
      <Btn label="Cancelar" btnType="secondary" />
      <Btn label="Guardar" type="submit" />
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import Btn from "../../public/Btn.vue";
import Input from "../../inputs/Input.vue";
import Select from "../../inputs/Select.vue";
import Textarea from "../../inputs/Textarea.vue";

const incomeType = ref(null);
const holder = ref("");
const amount = ref(null);
const description = ref("");

const form = ref("");

const submit = () => {
  console.log("SUBMIT");
  form.value.reset();
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/formTransactions.scss";
</style>
