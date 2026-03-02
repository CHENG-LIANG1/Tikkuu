<template>
  <div class="fixed inset-0 pointer-events-none overflow-hidden">
    <!-- Animated gradient orbs -->
    <div class="absolute inset-0">
      <div 
        class="absolute w-[800px] h-[800px] rounded-full opacity-30 animate-morph"
        style="background: radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%); top: -20%; right: -10%; filter: blur(80px);"
      />
      <div 
        class="absolute w-[600px] h-[600px] rounded-full opacity-20 animate-morph"
        style="background: radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%); bottom: -10%; left: -20%; filter: blur(100px); animation-delay: -5s;"
      />
      <div 
        class="absolute w-[500px] h-[500px] rounded-full opacity-25 animate-morph"
        style="background: radial-gradient(circle, rgba(236,72,153,0.4) 0%, transparent 70%); top: 40%; right: 20%; filter: blur(60px); animation-delay: -3s;"
      />
      <div 
        class="absolute w-[400px] h-[400px] rounded-full opacity-20 animate-morph"
        style="background: radial-gradient(circle, rgba(249,115,22,0.3) 0%, transparent 70%); bottom: 30%; right: 10%; filter: blur(70px); animation-delay: -7s;"
      />
    </div>
    
    <!-- Floating geometric shapes -->
    <div class="absolute inset-0">
      <div class="absolute top-20 left-[10%] w-32 h-32 border border-purple-500/20 rounded-full animate-float-slow animate-rotate-slow" />
      <div class="absolute top-40 right-[15%] w-24 h-24 border border-cyan-500/20 rotate-45 animate-float-reverse" />
      <div class="absolute bottom-40 left-[20%] w-16 h-16 border border-pink-500/20 rounded-full animate-float-slow" style="animation-delay: -2s;" />
      <div class="absolute bottom-60 right-[25%] w-20 h-20 border border-orange-500/20 rotate-12 animate-float-reverse" style="animation-delay: -4s;" />
    </div>
    
    <!-- Grid pattern -->
    <div class="absolute inset-0 grid-bg opacity-50" />
    
    <!-- Noise texture -->
    <div class="absolute inset-0 noise-overlay" />
  </div>
</template>

<script setup lang="ts">
// Dynamic animated background
</script>
