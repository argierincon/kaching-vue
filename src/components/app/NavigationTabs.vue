<template>
  <section class="navigation-tabs">
    <nav class="tabs">
      <ul>
        <li
          v-for="(tab, idx) in tabs"
          :key="tab"
          :class="{ 'is-active': tab.isActive }"
          @click="() => switchTab(tab, idx)"
        >
          {{ tab.label }}
        </li>
      </ul>
    </nav>
    <section class="tab-content">
      <transition name="fade">
        <component :is="currentTab"></component>
      </transition>
    </section>
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
      tabs: [
        {
          isActive: true,
          label: "Total ahorrado",
          component: "BalanceBox",
        },
        {
          isActive: false,
          label: "Actividad reciente",
          component: "TransactionBox",
        },
      ],
    };
  },
  methods: {
    switchTab(tab) {
      this.currentTab = tab.component;
      this.tabs.find((tab) => tab.isActive).isActive = false;
      tab.isActive = true;
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

.tabs {
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-grow: 1;
    flex-shrink: 0;
    border-bottom-color: #dbdbdb;
    border-bottom-style: solid;
    border-bottom-width: 1px;

    li {
      padding: 0.5em 1em;
      text-align: center;
      font-size: 14px;
      cursor: pointer;
    }

    li.is-active {
      margin-bottom: -1px;
      border-bottom-width: 1px;
      border-bottom-style: solid;
      border-bottom-color: $color-primary;
      color: $color-primary;
    }
  }
}

.tab-content {
  padding: 1rem 0;
}

// Clases de transicion

.fade-enter-from,
.fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.fade-enter-active,
.fade-enter-to {
  transition: all 0.5s ease;
}
</style>
