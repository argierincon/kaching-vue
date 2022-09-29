<template>
  <section class="default-layout">
    <slot name="header"></slot>
    <main>
      <slot name="main-content"></slot>
    </main>
    <slot name="nav-menu"></slot>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.default-layout {
  main {
    padding: 1.5rem;
  }
}
</style>
