<template>
  <section class="max-w-sections">
    <AddIncome />
  </section>
</template>

<script setup>
import AddIncome from "../components/app/formAddTransaction/AddIncome.vue";
</script>

<style>
@media screen and (min-width: 1024px) {
  .max-w-sections {
    max-width: 70%;
    margin: auto;
  }
}
</style>
