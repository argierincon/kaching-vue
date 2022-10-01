<template>
  <nav class="nav-menu">
    <MenuItem
      v-for="item in optMenu"
      :key="item.id"
      :label="item.label"
      :icon="item.icon"
    />
  </nav>
</template>

<script>
import { mdiHome, mdiCashMinus, mdiCashPlus, mdiCashClock } from "@mdi/js";
import MenuItem from "./MenuItem.vue";

export default {
  components: {
    MenuItem,
  },
  data() {
    return {
      optMenu: [
        {
          id: "1",
          icon: mdiHome,
          label: "Home",
        },
        {
          id: "2",
          icon: mdiCashMinus,
          label: "Ingreso",
        },
        {
          id: "3",
          icon: mdiCashPlus,
          label: "Egreso",
        },
        {
          id: "4",
          icon: mdiCashClock,
          label: "Historial",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.nav-menu {
  min-height: 60px;
  padding: 0.5rem;
  width: 100%;
  background: $bg-color-violet;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  position: fixed;
  bottom: 0;
  gap: 0.5rem;
}
</style>
