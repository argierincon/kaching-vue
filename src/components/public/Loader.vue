<template>
  <div class="loader">
    <div class="loader-bg"></div>
    <div class="dot-wave">
      <div class="dot-wave__dot"></div>
      <div class="dot-wave__dot"></div>
      <div class="dot-wave__dot"></div>
      <div class="dot-wave__dot"></div>
    </div>
  </div>
</template>

<style scoped>
.loader {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  overflow: hidden;
}

.loader-bg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: hsla(0, 0%, 100%, 0.5);
}

.dot-wave {
  --uib-size: 47px;
  --uib-speed: 1s;
  --uib-color: #4c4c4c;

  padding-top: calc(var(--uib-size) * 0.34);
  width: var(--uib-size);
  height: calc(var(--uib-size) * 0.17);
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}

.dot-wave__dot {
  width: calc(var(--uib-size) * 0.17);
  height: calc(var(--uib-size) * 0.17);
  flex-shrink: 0;
  background-color: var(--uib-color);
  will-change: transform;
  border-radius: 50%;
}

.dot-wave__dot:nth-child(1) {
  animation: jump var(--uib-speed) ease-in-out calc(var(--uib-speed) * -0.45)
    infinite;
}

.dot-wave__dot:nth-child(2) {
  animation: jump var(--uib-speed) ease-in-out calc(var(--uib-speed) * -0.3)
    infinite;
}

.dot-wave__dot:nth-child(3) {
  animation: jump var(--uib-speed) ease-in-out calc(var(--uib-speed) * -0.15)
    infinite;
}

.dot-wave__dot:nth-child(4) {
  animation: jump var(--uib-speed) ease-in-out infinite;
}

@keyframes jump {
  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-200%);
  }
}
</style>
