<template>
  <footer class="relative py-20 overflow-hidden">
    <!-- Top border gradient -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    
    <div class="px-6 lg:px-12">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
          <!-- Logo & tagline -->
          <div class="text-center lg:text-left">
            <div class="text-6xl font-black text-gradient mb-4">竹</div>
            <p class="text-white/30">Before the Snow Melts</p>
          </div>
          
          <!-- Links -->
          <div class="flex items-center gap-8">
            <a 
              v-for="link in links" 
              :key="link.href"
              :href="link.href"
              class="text-white/30 hover:text-white transition-colors text-sm uppercase tracking-widest"
              @click.prevent="scrollTo(link.href)"
            >
              {{ link.text }}
            </a>
          </div>
          
          <!-- Copyright -->
          <div class="text-white/20 text-sm">
            © 2024 Made with <span class="text-pink-500">♥</span>
          </div>
        </div>
        
        <!-- Big text decoration -->
        <div class="mt-20 overflow-hidden">
          <div class="text-[15vw] font-black text-white/[0.02] whitespace-nowrap leading-none tracking-tighter">
            BEFORE THE SNOW MELTS
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const links = [
  { href: '#journey', text: '旅程' },
  { href: '#stories', text: '故事' },
  { href: '#tasks', text: '清单' },
  { href: '#contact', text: '联系' },
]

function scrollTo(href: string) {
  const el = document.querySelector(href)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
