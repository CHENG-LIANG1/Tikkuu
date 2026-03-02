<template>
  <div>
    <div 
      class="cursor-dot"
      :style="{ 
        transform: `translate(${mouse.x}px, ${mouse.y}px)`,
        opacity: isVisible ? 1 : 0
      }"
    ></div>
    <div 
      class="cursor-ring"
      :class="{ hover: isHovering }"
      :style="{ 
        transform: `translate(${mouse.x - 16}px, ${mouse.y - 16}px)`,
        opacity: isVisible ? 1 : 0
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const mouse = ref({ x: 0, y: 0 })
const isHovering = ref(false)
const isVisible = ref(false)

function updateMouse(e: MouseEvent) {
  mouse.value.x = e.clientX
  mouse.value.y = e.clientY
  isVisible.value = true
}

function handleMouseEnter() {
  isHovering.value = true
}

function handleMouseLeave() {
  isHovering.value = false
}

function handleMouseOut() {
  isVisible.value = false
}

onMounted(() => {
  window.addEventListener('mousemove', updateMouse)
  window.addEventListener('mouseout', handleMouseOut)
  
  // Add hover detection for interactive elements
  const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, .cursor-pointer')
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', handleMouseEnter)
    el.addEventListener('mouseleave', handleMouseLeave)
  })
  
  // Watch for DOM changes
  const observer = new MutationObserver(() => {
    const newElements = document.querySelectorAll('a, button, [role="button"], input, textarea, .cursor-pointer')
    newElements.forEach(el => {
      el.removeEventListener('mouseenter', handleMouseEnter)
      el.removeEventListener('mouseleave', handleMouseLeave)
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })
  })
  
  observer.observe(document.body, { childList: true, subtree: true })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', updateMouse)
  window.removeEventListener('mouseout', handleMouseOut)
})
</script>
