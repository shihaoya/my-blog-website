<script setup lang="ts">
import {toggleDark} from './hooks/dark.ts'
import {useDark, useMouse, useToggle} from '@vueuse/core'
import {onBeforeUnmount, ref} from 'vue'
import {randomNumber, randomRGB, randomSimilarColor} from './utils'
function click(e: MouseEvent) {
  toggleDark(e)
  const isDark = useDark()
  useToggle(isDark)
}
let { x, y } = useMouse()
let color = ref(randomRGB())
let radius = ref(50)
let timer = setInterval(() => {
  color.value = randomSimilarColor(color.value)
  radius.value = randomNumber(10, 50)
}, 100)
onBeforeUnmount(() => {
  clearInterval(timer)
})
</script>

<template>
  <button @click="click">切换主题</button>
  <!-- 鼠标的背景 -->
  <div class="mouse-bg" w="100" h="100"
       :style="{
          left: `${(x || -9999)}px`,
          top: `${(y || -9999)}px`,
          '--color': color,
          'border-radius': radius + '%'
        }"
  ></div>
</template>

<style scoped>
.mouse-bg {
  position: fixed;
  z-index: -1;
  background-image: radial-gradient(var(--color) 10%, transparent 80%);
  opacity: 0.5;
  filter: blur(10px);
  transform: translate(-50%, -50%) scale(0.5);
  pointer-events: none;
  user-select: none;
  transition: 0.5s border-radius ease;
}
</style>
