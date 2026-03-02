<template>
  <section class="min-h-screen relative flex items-center overflow-hidden px-6 lg:px-12">
    <!-- Left content -->
    <div class="w-full lg:w-1/2 z-10 relative">
      <!-- Small tag -->
      <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-purple-500/30 mb-8 animate-fade-in-up">
        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span class="text-sm text-white/60 tracking-wider uppercase">Our Journey</span>
        <span class="text-white/30">|</span>
        <span class="text-sm text-purple-400">2024 - Present</span>
      </div>
      
      <!-- Main title with split effect -->
      <div class="overflow-hidden mb-6">
        <h1 class="display-large text-white">
          <span class="block">Before</span>
          <span class="block text-gradient-alt">the Snow</span>
          <span class="block">Melts</span>
        </h1>
      </div>
      
      <!-- Subtitle -->
      <p class="text-xl text-white/50 max-w-md mb-10 leading-relaxed">
        记录我们的婚假之旅，从 <span class="text-purple-400">Coldplay</span> 演唱会到 <span class="text-cyan-400">日本</span> 的探索
      </p>
      
      <!-- CTA Buttons -->
      <div class="flex flex-wrap items-center gap-4">
        <button 
          class="btn-magnetic btn-primary-magnetic group"
          @click="scrollTo('#stories')"
        >
          <span class="flex items-center gap-2">
            探索故事
            <span class="i-carbon-arrow-right transition-transform group-hover:translate-x-1"></span>
          </span>
        </button>
        <button 
          class="btn-magnetic btn-glass"
          @click="scrollTo('#journey')"
        >
          查看足迹
        </button>
      </div>
      
      <!-- Stats row -->
      <div class="mt-16 flex items-center gap-12">
        <div class="group cursor-pointer" @click="scrollTo('#tasks')">
          <div class="text-4xl font-bold text-gradient mb-1 group-hover:scale-110 transition-transform">{{ daysTogether }}</div>
          <div class="text-xs text-white/30 uppercase tracking-widest">天在一起</div>
        </div>
        <div class="w-px h-12 bg-gradient-to-b from-purple-500/50 to-transparent"></div>
        <div>
          <div class="text-4xl font-bold text-cyan-400 mb-1">2</div>
          <div class="text-xs text-white/30 uppercase tracking-widest">场演唱会</div>
        </div>
        <div class="w-px h-12 bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
        <div>
          <div class="text-4xl font-bold text-pink-400 mb-1">6</div>
          <div class="text-xs text-white/30 uppercase tracking-widest">城市足迹</div>
        </div>
      </div>
    </div>
    
    <!-- Right visual -->
    <div class="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full">
      <!-- 3D Floating cards -->
      <div class="relative w-full h-full perspective-1000">
        <!-- Card 1 -->
        <div 
          class="absolute top-[15%] right-[20%] w-72 h-96 rounded-3xl overflow-hidden card-3d animate-float-slow group cursor-pointer"
          style="transform: perspective(1000px) rotateY(-15deg) rotateX(5deg);"
          @mousemove="handleMouseMove"
          @mouseleave="handleMouseLeave"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-pink-600/80"></div>
          <div class="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <div class="text-6xl mb-4">🎤</div>
            <div class="text-2xl font-bold text-white mb-2">Seoul</div>
            <div class="text-white/60 text-sm">Coldplay Music Of The Spheres</div>
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        
        <!-- Card 2 -->
        <div 
          class="absolute top-[35%] right-[5%] w-64 h-80 rounded-3xl overflow-hidden card-3d animate-float-reverse group cursor-pointer"
          style="transform: perspective(1000px) rotateY(-10deg) rotateX(-5deg); animation-delay: -3s;"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-cyan-600/80 to-blue-600/80"></div>
          <div class="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <div class="text-5xl mb-4">🗻</div>
            <div class="text-xl font-bold text-white mb-2">Mt. Fuji</div>
            <div class="text-white/60 text-sm">樱花与雪山的邂逅</div>
          </div>
        </div>
        
        <!-- Card 3 -->
        <div 
          class="absolute bottom-[15%] right-[25%] w-56 h-72 rounded-3xl overflow-hidden card-3d animate-float-slow group cursor-pointer"
          style="transform: perspective(1000px) rotateY(-20deg) rotateX(10deg); animation-delay: -6s;"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-pink-600/80 to-orange-600/80"></div>
          <div class="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <div class="text-5xl mb-4">🍡</div>
            <div class="text-xl font-bold text-white mb-2">Shizuoka</div>
            <div class="text-white/60 text-sm">小丸子乐园</div>
          </div>
        </div>
        
        <!-- Decorative elements -->
        <div class="absolute top-[20%] left-[30%] w-20 h-20 border-2 border-purple-500/30 rounded-full animate-pulse"></div>
        <div class="absolute bottom-[30%] left-[20%] w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
      </div>
    </div>
    
    <!-- Scroll indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
      <span class="text-xs text-white/30 uppercase tracking-widest">Scroll</span>
      <div class="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1">
        <div class="w-1.5 h-3 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full animate-bounce"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const daysTogether = computed(() => {
  const start = new Date('2024-05-28')
  const now = new Date()
  return Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
})

function scrollTo(selector: string) {
  const el = document.querySelector(selector)
  el?.scrollIntoView({ behavior: 'smooth' })
}

function handleMouseMove(e: MouseEvent) {
  const card = e.currentTarget as HTMLElement
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const rotateX = (y - centerY) / 20
  const rotateY = (centerX - x) / 20
  
  card.style.setProperty('--rotateX', `${-rotateX}deg`)
  card.style.setProperty('--rotateY', `${rotateY}deg`)
}

function handleMouseLeave(e: MouseEvent) {
  const card = e.currentTarget as HTMLElement
  card.style.setProperty('--rotateX', '0deg')
  card.style.setProperty('--rotateY', '0deg')
}
</script>
