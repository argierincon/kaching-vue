<template>
  <form action="" class="form-add-transaction">
    <p>Registrar Ingreso</p>
    <select name="tipo">
      <option value="">Transferencia</option>
      <option value="">Efectivo</option>
    </select>
    <input placeholder="Titular" type="text" />
    <input placeholder="Monto" type="text" />
    <textarea
      name=""
      id=""
      cols="30"
      rows="10"
      placeholder="Descripcion"
    ></textarea>

    <div class="form-add-transaction__buttons">
      <Btn label="Cancelar" btnType="secondary" />
      <Btn label="Guardar" />
    </div>
  </form>
</template>

<script setup>
import Btn from "../../public/Btn.vue";
</script>

<style lang="scss" scoped>
.form-add-transaction {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  // align-items: center;
  background: thistle;

  &__buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
</style>
