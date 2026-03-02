<template>
  <section id="journey" class="py-32 relative overflow-hidden">
    <!-- Section header -->
    <div class="px-6 lg:px-12 mb-20">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 text-cyan-400 text-sm mb-6">
              <span class="i-carbon-location text-lg"></span>
              <span class="uppercase tracking-widest">Journey Map</span>
            </div>
            <h2 class="display-medium text-white">
              穿越 <span class="text-gradient">6座城市</span><br>
              的<span class="text-cyan-400">浪漫之旅</span>
            </h2>
          </div>
          <p class="text-white/40 max-w-md text-lg">
            从首尔的演唱会到大阪的购物，每一站都是独特的回忆
          </p>
        </div>
      </div>
    </div>
    
    <!-- Horizontal scroll cards -->
    <div class="relative">
      <!-- Scroll container -->
      <div 
        ref="scrollContainer"
        class="flex gap-6 overflow-x-auto hide-scrollbar px-6 lg:px-12 pb-8 snap-x snap-mandatory"
        @scroll="handleScroll"
      >
        <div 
          v-for="(city, index) in cities" 
          :key="city.name"
          class="flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw] snap-center"
        >
          <div 
            class="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer card-3d"
            :style="{ 
              background: `linear-gradient(145deg, ${city.color}20 0%, rgba(15,23,42,0.9) 50%, rgba(3,7,18,0.95) 100%)`,
              border: `1px solid ${city.color}30`
            }"
            @mousemove="handleCardMove"
            @mouseleave="handleCardLeave"
          >
            <!-- Background glow -->
            <div 
              class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              :style="{ background: `radial-gradient(circle at 50% 0%, ${city.color}30, transparent 60%)` }"
            ></div>
            
            <!-- Content -->
            <div class="relative h-full flex flex-col justify-between p-8">
              <!-- Top -->
              <div class="flex items-start justify-between">
                <div 
                  class="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                  :style="{ backgroundColor: city.color + '20', border: `2px solid ${city.color}40` }"
                >
                  {{ city.icon }}
                </div>
                <div 
                  class="px-4 py-2 rounded-full text-sm font-bold border"
                  :style="{ backgroundColor: city.color + '15', color: city.color, borderColor: city.color + '30' }"
                >
                  {{ city.country }}
                </div>
              </div>
              
              <!-- Middle - Large number -->
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div 
                  class="text-[180px] font-black leading-none opacity-5 group-hover:opacity-10 transition-opacity"
                  :style="{ color: city.color }"
                >
                  0{{ index + 1 }}
                </div>
              </div>
              
              <!-- Bottom -->
              <div>
                <div class="text-white/30 text-sm font-mono mb-2">{{ city.date }}</div>
                <h3 
                  class="text-4xl font-bold mb-3 transition-all group-hover:tracking-wider"
                  :style="{ color: city.color }"
                >
                  {{ city.name }}
                </h3>
                <p class="text-white/50 group-hover:text-white/70 transition-colors">
                  {{ city.desc }}
                </p>
                
                <!-- Arrow -->
                <div class="mt-6 flex items-center gap-2 text-white/30 group-hover:text-white/60 transition-colors">
                  <span class="text-sm">查看详情</span>
                  <span class="i-carbon-arrow-right transition-transform group-hover:translate-x-2"></span>
                </div>
              </div>
            </div>
            
            <!-- Bottom glow line -->
            <div 
              class="absolute bottom-0 left-0 right-0 h-1 transition-all duration-500"
              :style="{ 
                background: `linear-gradient(90deg, transparent, ${city.color}, transparent)`,
                opacity: '0.5'
              }"
            ></div>
          </div>
        </div>
        
        <!-- Spacer at end -->
        <div class="flex-shrink-0 w-12"></div>
      </div>
      
      <!-- Scroll progress -->
      <div class="px-6 lg:px-12 mt-8">
        <div class="max-w-7xl mx-auto flex items-center gap-4">
          <div class="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
            <div 
              class="h-full rounded-full transition-all duration-300"
              :style="{ 
                width: scrollProgress + '%',
                background: 'linear-gradient(90deg, #8B5CF6, #06B6D4, #EC4899)'
              }"
            ></div>
          </div>
          <div class="text-sm text-white/30 font-mono">
            {{ currentIndex + 1 }} / {{ cities.length }}
          </div>
        </div>
      </div>
      
      <!-- Navigation arrows -->
      <div class="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-6 right-6 justify-between pointer-events-none">
        <button 
          class="w-14 h-14 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-purple-500/50 transition-all pointer-events-auto backdrop-blur-sm"
          @click="scroll('left')"
        >
          <span class="i-carbon-chevron-left text-2xl"></span>
        </button>
        <button 
          class="w-14 h-14 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-purple-500/50 transition-all pointer-events-auto backdrop-blur-sm"
          @click="scroll('right')"
        >
          <span class="i-carbon-chevron-right text-2xl"></span>
        </button>
      </div>
    </div>
    
    <!-- Floating city names marquee -->
    <div class="mt-20 overflow-hidden relative">
      <div class="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#020617] to-transparent z-10"></div>
      <div class="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#020617] to-transparent z-10"></div>
      
      <div class="flex animate-marquee">
        <template v-for="i in 3" :key="i">
          <span 
            v-for="city in cities" 
            :key="city.name + i"
            class="inline-flex items-center gap-4 mx-12 text-7xl md:text-9xl font-black text-white/[0.02] whitespace-nowrap"
          >
            {{ city.name }}
            <span class="w-4 h-4 rounded-full" :style="{ backgroundColor: city.color }"></span>
          </span>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const scrollContainer = ref<HTMLElement>()
const scrollProgress = ref(0)
const currentIndex = ref(0)

const cities = [
  { name: '首尔', country: '韩国', date: '4.23 - 4.26', desc: 'Coldplay 演唱会之旅，音乐与梦想的碰撞', icon: '🎤', color: '#8B5CF6' },
  { name: '东京', country: '日本', date: '4.26 - 4.29', desc: '秋叶原巡礼，二次元与现实的交织', icon: '🗼', color: '#06B6D4' },
  { name: '富士山', country: '日本', date: '4.29 - 4.30', desc: '山中湖与樱花，完美的光影时刻', icon: '🗻', color: '#22D3EE' },
  { name: '静冈', country: '日本', date: '5.1 - 5.2', desc: '小丸子乐园，寻找童年的足迹', icon: '🍡', color: '#EC4899' },
  { name: '名古屋', country: '日本', date: '5.2 - 5.4', desc: '乐高乐园，定制专属砖块 240824', icon: '🧱', color: '#F472B6' },
  { name: '大阪', country: '日本', date: '5.4 - 5.9', desc: 'USJ & 购物之旅的 finale', icon: '🌟', color: '#FBBF24' },
]

function handleScroll() {
  if (!scrollContainer.value) return
  const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.value
  scrollProgress.value = (scrollLeft / (scrollWidth - clientWidth)) * 100
  
  // Calculate current index
  const cardWidth = scrollContainer.value.querySelector('.snap-center')?.clientWidth || 0
  const gap = 24
  currentIndex.value = Math.round(scrollLeft / (cardWidth + gap))
}

function scroll(direction: 'left' | 'right') {
  if (!scrollContainer.value) return
  const cardWidth = scrollContainer.value.querySelector('.snap-center')?.clientWidth || 0
  const gap = 24
  const scrollAmount = cardWidth + gap
  
  scrollContainer.value.scrollBy({
    left: direction === 'left' ? -scrollAmount : scrollAmount,
    behavior: 'smooth'
  })
}

function handleCardMove(e: MouseEvent) {
  const card = e.currentTarget as HTMLElement
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const rotateX = (y - centerY) / 30
  const rotateY = (centerX - x) / 30
  
  card.style.setProperty('--rotateX', `${-rotateX}deg`)
  card.style.setProperty('--rotateY', `${rotateY}deg`)
}

function handleCardLeave(e: MouseEvent) {
  const card = e.currentTarget as HTMLElement
  card.style.setProperty('--rotateX', '0deg')
  card.style.setProperty('--rotateY', '0deg')
}
</script>
