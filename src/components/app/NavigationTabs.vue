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
      <transition name="slide">
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
      font-size: 0.85rem;
      cursor: pointer;
      transition: color 0.3s ease;

      @include laptop {
        font-size: 0.95rem;
      }

      &:hover {
        color: $color-primary;
        transition: color 0.3s ease;
      }
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

.slide-enter-from,
.slide-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.slide-enter-active,
.slide-enter-to {
  transition: all 0.3s ease-out;
}
</style>
