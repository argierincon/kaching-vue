<template>
  <form action="" class="form-add-transaction">
    <h4 class="form-add-transaction__title">Registrar Ingreso</h4>
    <Select label="Tipo de ingreso" />
    <Input label="Titular" placeholder="Ingresa el titular" />
    <Input type="number" label="Monto" placeholder="Ingresa el monto" />
    <Textarea label="Descripción" />

    <div class="form-add-transaction__buttons">
      <Btn label="Cancelar" btnType="secondary" />
      <Btn label="Guardar" />
    </div>
  </form>
</template>

<script setup>
import Btn from "../../public/Btn.vue";
import Input from "../../inputs/Input.vue";
import Select from "../../inputs/Select.vue";
import Textarea from "../../inputs/Textarea.vue";
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/formTransactions.scss";
</style>
