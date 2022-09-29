<template>
  <section class="navigation-tabs">
    <button
      class="btn"
      v-for="tab in tabs"
      :key="tab"
      @click="() => switchTab(tab)"
    >
      {{ tab }}
    </button>
    <transition name="slide-fade">
      <component :is="currentTab"></component>
    </transition>
  </section>
</template>

<script>
import BalanceBox from "@/components/app/BalanceBox.vue";
import TransactionBox from "@/components/app/TransactionBox.vue";

export default {
  components: { BalanceBox, TransactionBox },
  data() {
    return {
      currentTab: "BalanceBox",
      tabs: ["BalanceBox", "TransactionBox"],
    };
  },
  methods: {
    switchTab(tab) {
      return (this.currentTab = tab);
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation-tabs {
  button {
    margin: 1rem 1rem 1rem 0;
    cursor: pointer;
  }
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(80px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-enter-to {
  transition: all 0.3s ease-out;
}
</style>
