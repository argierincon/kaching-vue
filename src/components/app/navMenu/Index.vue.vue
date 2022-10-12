<template>
  <nav class="nav-menu">
    <MenuItem
      v-for="item in optionsMenu"
      :key="item.id"
      :label="item.label"
      :icon="item.icon"
      :onClick="item.click"
      :isActive="item.isActive"
    />
  </nav>
</template>

<script>
import { mdiHome } from "@mdi/js";
import MenuItem from "./MenuItem.vue";

export default {
  components: {
    MenuItem,
  },
  props: {
    optionsMenu: {
      type: Array,
      default: () => [
        {
          id: "1",
          icon: mdiHome,
          label: "Inicio",
        },
      ],
    },
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
