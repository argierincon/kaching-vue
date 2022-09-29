<template>
  <div class="balance-box">
    <p class="balance-box__title">BALANCE</p>
    <h6 class="balance-box__amount">s/3,500.40</h6>
  </div>
</template>

<style lang="scss" scoped>
.balance-box {
  @include violet-box;

  &__title {
    font-weight: 500;
  }

  &__amount {
    margin-top: 0.25rem;
    font-weight: 600;
  }
}
</style>
