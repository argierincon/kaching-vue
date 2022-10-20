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
