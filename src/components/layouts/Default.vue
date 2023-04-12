<template>
  <section class="default-layout">
    <Header />

    <main>
      <slot></slot>
    </main>

    <NavMenu :optionsMenu="optMenu" class="layout-menu" />
  </section>
</template>

<script>
import Header from "@/components/public/Header.vue";
import NavMenu from "@/components/app/navMenu/Index.vue";
import menuElemsMixin from "@/mixins/navMenuMixin.js";

export default {
  name: "navMenu",
  mixins: [menuElemsMixin],
  components: { Header, NavMenu },
};
</script>

<style lang="scss" scoped>
.default-layout {
  width: 100%;
  padding-bottom: 60px;

  @include laptop {
    padding-bottom: 0;
  }

  main {
    padding: 2rem 1.5rem;

    @include laptop {
      padding: 146px 1.5rem 1.5rem 104px;
    }
  }
}
</style>
