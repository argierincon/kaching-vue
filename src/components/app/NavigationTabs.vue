<template>
  <section>
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
export default {
  props: {
    tabs: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentTab: null,
      // tabs: [
      //   {
      //     isActive: true,
      //     label: "Total ahorrado",
      //     component: "BalanceBox",
      //   },
      // ],
    };
  },
  mounted() {
    this.currentTab = this.tabs[0].component;
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
.tabs::-webkit-scrollbar {
  display: none;
}

.tabs {
  overflow: hidden;
  overflow-x: auto;

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom-color: #dbdbdb;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    white-space: nowrap;

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
  padding-top: 1.5rem;
}

// Clases de transicion

.fade-enter-from,
.fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.fade-enter-active,
.fade-enter-to {
  transition: all 0.3s ease-out;
}
</style>
