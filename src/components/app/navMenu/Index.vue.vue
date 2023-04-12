<template>
  <nav class="nav-menu">
    <MenuItem
      v-for="item in optionsMenu"
      :key="item.id"
      :label="item.label"
      :icon="item.icon"
      :path="item.path"
      :isActive="item.path === this.$route.path"
    />
  </nav>
</template>

<script>
import MenuItem from "./MenuItem.vue";
import { mdiHome, mdiCashMinus, mdiCashPlus, mdiCashClock } from "@mdi/js";

export default {
  components: {
    MenuItem,
  },
  data() {
    return {
      optionsMenu: [
        {
          id: "1",
          icon: mdiHome,
          label: "Inicio",
          path: "/",
        },
        {
          id: "2",
          icon: mdiCashPlus,
          label: "Ingreso",
          path: "/add-income",
        },
        {
          id: "3",
          icon: mdiCashMinus,
          label: "Gasto",
          path: "/add-outcome",
        },
        {
          id: "4",
          icon: mdiCashClock,
          label: "Historial",
          path: "/historial-de-transacciones",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.nav-menu {
  min-height: 60px;
  width: 100%;
  padding: 0.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  position: fixed;
  bottom: 0;
  background: $bg-color-violet;

  @include laptop {
    padding-top: 6rem;
    height: 100%;
    width: 80px;
    display: flex;
    flex-direction: column;
    gap: 6rem;
    position: fixed;
    top: 0;
  }
}
</style>
