<template>
  <section id="contact" class="py-32 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"></div>
      <div class="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"></div>
    </div>
    
    <div class="px-6 lg:px-12 relative z-10">
      <div class="max-w-5xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-20">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 text-cyan-400 text-sm mb-6">
            <span class="i-carbon-email text-lg"></span>
            <span class="uppercase tracking-widest">Get in Touch</span>
          </div>
          <h2 class="display-medium text-white mb-6">
            找到<span class="text-gradient">我们</span>
          </h2>
          <p class="text-white/40 text-lg max-w-xl mx-auto">
            如果你也在南京，欢迎联系我们，一起喝咖啡或旅行
          </p>
        </div>
        
        <!-- Contact cards -->
        <div class="grid md:grid-cols-2 gap-6 mb-20">
          <!-- Email -->
          <a 
            href="mailto:liangcheng2456@gmail.com"
            class="group relative p-8 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
            style="background: linear-gradient(145deg, rgba(139,92,246,0.1) 0%, rgba(15,23,42,0.5) 100%); border: 1px solid rgba(139,92,246,0.2)"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="relative flex items-start gap-6">
              <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl" style="background: linear-gradient(135deg, rgba(139,92,246,0.2) 0%, rgba(139,92,246,0.1) 100%); border: 2px solid rgba(139,92,246,0.3)">
                <span class="i-carbon-email text-purple-400"></span>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white mb-2">Email</h3>
                <p class="text-white/30 text-sm mb-4">随时发送邮件给我们</p>
                <div class="flex items-center gap-2 text-purple-400 font-medium group-hover:underline">
                  <span class="i-carbon-email text-sm"></span>
                  <span>liangcheng2456@gmail.com</span>
                </div>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </a>
          
          <!-- Location -->
          <div 
            class="group relative p-8 rounded-3xl overflow-hidden transition-all duration-500"
            style="background: linear-gradient(145deg, rgba(236,72,153,0.1) 0%, rgba(15,23,42,0.5) 100%); border: 1px solid rgba(236,72,153,0.2)"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="relative flex items-start gap-6">
              <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl" style="background: linear-gradient(135deg, rgba(236,72,153,0.2) 0%, rgba(236,72,153,0.1) 100%); border: 2px solid rgba(236,72,153,0.3)">
                <span class="i-carbon-location text-pink-400"></span>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white mb-2">Location</h3>
                <p class="text-white/30 text-sm mb-4">目前居住在</p>
                <div class="flex items-center gap-2 text-pink-400 font-medium">
                  <span class="i-carbon-location text-sm"></span>
                  <span>江苏南京, 中国</span>
                </div>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </div>
        </div>
        
        <!-- Big quote -->
        <div class="relative">
          <div class="absolute -top-10 -left-10 text-[200px] font-serif text-white/[0.02] leading-none">"</div>
          <blockquote class="text-center">
            <p class="text-3xl md:text-4xl lg:text-5xl font-light text-white/80 leading-tight mb-8">
              这个世界上会有人比我更爱竹吗，<br>
              我认为没有，我就是这个世界上<br>
              <span class="text-gradient font-bold">最会赏竹的人</span>。
            </p>
            <footer class="text-white/30">
              <span class="text-purple-400">—</span> 刘皖竹的故事
            </footer>
          </blockquote>
          <div class="absolute -bottom-10 -right-10 text-[200px] font-serif text-white/[0.02] leading-none rotate-180">"</div>
        </div>
      </div>
    </div>
  </section>
</template>
