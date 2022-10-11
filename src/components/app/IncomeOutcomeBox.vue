<template>
  <div class="transaction-box">
    <p class="transaction-box__title">Ingresos</p>
    <p class="transaction-box__amount">s/3,500.40</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.transaction-box {
  @include violet-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  &__title {
    font-weight: 500;
    @include laptop {
      font-size: 1.1rem;
    }
  }

  &__amount {
    font-weight: 400;

    @include laptop {
      font-size: 1.25rem;
    }
  }
}
</style>
