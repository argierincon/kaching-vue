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
    <NavMenu :optionsMenu="optMenu" />
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
  position: absolute;

  main {
    padding: 2rem 1.5rem;
  }
}
</style>
