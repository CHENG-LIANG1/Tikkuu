<template>
  <nav 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="scrolled ? 'py-4' : 'py-8'"
  >
    <div 
      class="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between transition-all duration-500"
      :class="scrolled ? 'py-3 px-6 rounded-full bg-black/50 backdrop-blur-xl border border-white/5' : ''"
    >
      <!-- Logo -->
      <a 
        href="#" 
        class="text-3xl font-black text-gradient hover:opacity-80 transition-opacity"
        @click.prevent="scrollToTop"
      >
        竹
      </a>
      
      <!-- Desktop Links -->
      <div class="hidden md:flex items-center gap-1">
        <a 
          v-for="link in links" 
          :key="link.href"
          :href="link.href"
          class="px-4 py-2 rounded-full text-sm text-white/50 hover:text-white transition-all hover:bg-white/5"
          @click.prevent="scrollTo(link.href)"
        >
          {{ link.text }}
        </a>
      </div>
      
      <!-- CTA -->
      <div class="flex items-center gap-4">
        <a 
          href="#contact"
          class="hidden sm:flex btn-magnetic btn-primary-magnetic text-sm py-2.5 px-6"
          @click.prevent="scrollTo('#contact')"
        >
          <span>联系我们</span>
        </a>
        
        <!-- Mobile menu button -->
        <button 
          class="md:hidden w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <span class="text-xl">{{ mobileMenuOpen ? '✕' : '☰' }}</span>
        </button>
      </div>
    </div>
    
    <!-- Mobile Menu -->
    <div 
      v-show="mobileMenuOpen"
      class="md:hidden fixed inset-x-4 top-20 rounded-3xl p-6 z-50"
      style="background: rgba(15, 23, 42, 0.95); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.1)"
    >
      <div class="space-y-2">
        <a 
          v-for="link in links" 
          :key="link.href"
          :href="link.href"
          class="block px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all text-lg"
          @click.prevent="scrollTo(link.href); mobileMenuOpen = false"
        >
          {{ link.text }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const links = [
  { href: '#journey', text: '旅程' },
  { href: '#stories', text: '故事' },
  { href: '#tasks', text: '清单' },
]

function handleScroll() {
  scrolled.value = window.scrollY > 50
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function scrollTo(href: string) {
  const el = document.querySelector(href)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
