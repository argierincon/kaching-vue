<template>
  <div class="graphic">
    <svg
      @touchstart="tap"
      @touchmove="tap"
      @touchend="untap"
      class="graphic__svg"
      viewBox="0 0 300 200"
    >
      <!-- line x -->
      <line
        stroke="#cacaca"
        stroke-width="1.8"
        x1="0"
        :y1="zero"
        x2="300"
        :y2="zero"
      />
      <polyline
        fill="none"
        stroke="#4cc5f9"
        stroke-width="1.8"
        :points="chartPoints"
      />
      <!-- points="0,0 100,100 200,100 300,200 " -->
      <!-- line y -->
      <line
        v-show="showPointer"
        stroke="#009950"
        stroke-width="1.8"
        :x1="pointer"
        y1="0"
        :x2="pointer"
        y2="200"
      />
    </svg>
    <p class="graphic__label">Últimos 30 días</p>
  </div>
</template>

<script setup>
import { defineProps, toRefs, computed, ref } from "vue";

const props = defineProps({
  amounts: { type: Array, default: () => [] },
});

const { amounts } = toRefs(props);

const amountToPixels = (amount) => {
  const min = Math.min(...amounts.value);
  const max = Math.max(...amounts.value);

  const AbsoluteAmount = amount + Math.abs(min);
  const minMaxDistance = Math.abs(max) + Math.abs(min);

  return 200 - ((AbsoluteAmount * 100) / minMaxDistance) * 2;
};

const zero = computed(() => {
  return amountToPixels(0);
});

const chartPoints = computed(() => {
  const total = amounts.value.length;
  return amounts.value.reduce((accPoints, currentAmount, idx) => {
    const x = (300 / total) * (idx + 1);
    const y = amountToPixels(currentAmount);
    return `${accPoints} ${x}, ${y} `;
  }, "0, 100");
});

const showPointer = ref(false);
const pointer = ref(0);

const tap = ({ target, touches }) => {
  showPointer.value = true;

  const eleWidth = target.getBoundingClientRect().width;
  const eleX = target.getBoundingClientRect().x;
  const touchX = touches[0].clientX;

  pointer.value = ((touchX - eleX) * 300) / eleWidth;
};

const untap = () => {
  showPointer.value = false;
};
</script>

<style lang="scss" scoped>
.graphic {
  display: flex;
  align-items: center;
  flex-direction: column;

  &__svg {
    margin: 1rem 0;
    width: 100%;
  }

  &__label {
    font-size: 0.9rem;
    color: $color-black-light;
    text-align: center;
  }
}
</style>
