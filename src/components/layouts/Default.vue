<template>
  <section class="default-layout">
    <slot name="header"></slot>
    <main>
      <slot name="main-content"></slot>
    </main>
    <MoblieModal
      :showModal="showModalIncome"
      @close="closeModalIncome"
      closeOutside
    >
      <AddIncome :btnCancel="() => closeModalIncome()" />
    </MoblieModal>
    <MoblieModal
      :showModal="showModalOutcome"
      @close="closeModalOutcome"
      closeOutside
    >
      <AddOutcome :btnCancel="() => closeModalOutcome()" />
    </MoblieModal>
    <NavMenu :optionsMenu="optMenu" class="layout-menu" />
  </section>
</template>

<script>
import NavMenu from "@/components/app/navMenu/Index.vue";
import menuElemsMixin from "@/mixins/navMenuMixin.js";

export default {
  name: "navMenu",
  mixins: [menuElemsMixin],
  components: { NavMenu },
};
</script>

<style lang="scss" scoped>
.default-layout {
  width: 100%;
  padding-bottom: 60px;
  // position: absolute;

  @include laptop {
    padding: 0;
    display: grid;
    grid-template-areas:
      "B A A A"
      "B C C C"
      "B C C C";
    grid-template-columns: 80px 1fr;
  }

  main {
    padding: 2rem 1.5rem;

    @include laptop {
      grid-area: C;
      padding: 3rem;
    }
  }
}

.layout-menu {
  grid-area: B;
}
</style>
