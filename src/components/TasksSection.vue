<template>
  <section id="tasks" class="py-32 relative overflow-hidden">
    <div class="px-6 lg:px-12">
      <div class="max-w-7xl mx-auto">
        <!-- Header with big stats -->
        <div class="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 text-amber-400 text-sm mb-6">
              <span class="i-carbon-task-complete text-lg"></span>
              <span class="uppercase tracking-widest">Bucket List</span>
            </div>
            <h2 class="display-medium text-white mb-6">
              150件<br>
              <span class="text-gradient">想做的事</span>
            </h2>
            <p class="text-white/40 text-lg max-w-md">
              记录我们共同完成的美好瞬间，每一个勾选都是珍贵的回忆
            </p>
          </div>
          
          <!-- Big progress display -->
          <div class="flex items-center justify-center lg:justify-end">
            <div class="relative">
              <!-- Circular progress -->
              <div class="w-48 h-48 relative">
                <svg class="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="rgba(255,255,255,0.05)"
                    stroke-width="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="url(#gradient)"
                    stroke-width="8"
                    stroke-linecap="round"
                    :stroke-dasharray="283"
                    :stroke-dashoffset="283 - (283 * progress / 100)"
                    class="transition-all duration-1000"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stop-color="#8B5CF6" />
                      <stop offset="50%" stop-color="#06B6D4" />
                      <stop offset="100%" stop-color="#EC4899" />
                    </linearGradient>
                  </defs>
                </svg>
                <div class="absolute inset-0 flex flex-col items-center justify-center">
                  <div class="text-5xl font-bold text-gradient">{{ progress }}%</div>
                  <div class="text-sm text-white/30 mt-1">{{ completedCount }}/150</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Category tabs - Horizontal scroll -->
        <div class="mb-12 overflow-x-auto hide-scrollbar">
          <div class="flex gap-3 min-w-max">
            <button
              v-for="cat in categories"
              :key="cat.id"
              class="px-6 py-4 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center gap-3 border"
              :class="activeCategory === cat.id 
                ? 'text-white border-transparent' 
                : 'text-white/40 border-white/10 hover:border-white/20 hover:text-white/70 bg-white/[0.02]'"
              :style="activeCategory === cat.id ? { 
                background: `linear-gradient(135deg, ${cat.color} 0%, ${cat.color}dd 100%)`,
                boxShadow: `0 8px 40px ${hexToRgba(cat.color, 0.3)}`
              } : {}"
              @click="activeCategory = cat.id"
            >
              <span :class="cat.icon"></span>
              <span class="uppercase tracking-wider">{{ cat.name }}</span>
            </button>
          </div>
        </div>
        
        <!-- Tasks grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          <button
            v-for="task in filteredTasks"
            :key="task.id"
            class="group relative text-left bg-transparent border-0 p-0 cursor-pointer"
            :class="lastClicked === task.id ? 'scale-[0.98]' : 'hover:scale-[1.01]'"
            :style="{ transition: 'transform 0.15s ease' }"
            @click="toggleTask(task.id)"
          >
            <div 
              class="relative h-full p-4 rounded-xl transition-all duration-200"
              :style="{
                backgroundColor: task.completed 
                  ? hexToRgba(getCategoryColor(task.category), 0.08)
                  : 'rgba(255,255,255,0.02)',
                border: `1px solid ${task.completed ? hexToRgba(getCategoryColor(task.category), 0.25) : 'rgba(255,255,255,0.06)'}`,
              }"
            >
              <!-- Top row: Icon and check -->
              <div class="flex items-center justify-between mb-3">
                <div 
                  class="w-6 h-6 rounded-md flex items-center justify-center text-xs"
                  :style="{ 
                    backgroundColor: hexToRgba(getCategoryColor(task.category), 0.15),
                    color: getCategoryColor(task.category)
                  }"
                >
                  <span :class="getCategoryIcon(task.category)"></span>
                </div>
                
                <!-- Simple dot for completed -->
                <div 
                  v-if="task.completed"
                  class="w-2 h-2 rounded-full"
                  :style="{ backgroundColor: getCategoryColor(task.category) }"
                ></div>
              </div>
              
              <!-- Task text -->
              <p 
                class="text-sm leading-snug transition-colors duration-200 text-left"
                :class="task.completed ? 'text-white/80' : 'text-white/50 group-hover:text-white/65'"
              >
                {{ task.text }}
              </p>
            </div>
          </button>
        </div>
        
        <!-- Empty state -->
        <div v-if="filteredTasks.length === 0" class="text-center py-20">
          <div class="text-6xl mb-4 opacity-30">✨</div>
          <p class="text-white/40">该分类下暂无任务</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { coupleTasks, categories, getCategoryColor, hexToRgba, type Task } from '../data/tasks'

const tasks = ref<Task[]>([...coupleTasks])
const activeCategory = ref('all')
const lastClicked = ref<number | null>(null)

onMounted(() => {
  const saved = localStorage.getItem('coupleTasks')
  if (saved) {
    try {
      const parsed = JSON.parse(saved)
      tasks.value = tasks.value.map(t => ({
        ...t,
        completed: parsed.find((p: any) => p.id === t.id)?.completed ?? t.completed
      }))
    } catch (e) {
      console.error('Failed to load tasks:', e)
    }
  }
})

watch(tasks, (newTasks) => {
  localStorage.setItem('coupleTasks', JSON.stringify(
    newTasks.map(t => ({ id: t.id, completed: t.completed }))
  ))
}, { deep: true })

const filteredTasks = computed(() => {
  if (activeCategory.value === 'all') return tasks.value
  return tasks.value.filter(t => t.category === activeCategory.value)
})

const completedCount = computed(() => tasks.value.filter(t => t.completed).length)
const progress = computed(() => Math.round((completedCount.value / tasks.value.length) * 100))

function getCategoryIcon(categoryId: string): string {
  const cat = categories.find(c => c.id === categoryId)
  return cat?.icon || 'i-lucide-sparkles'
}

function toggleTask(id: number) {
  const task = tasks.value.find(t => t.id === id)
  if (task) {
    task.completed = !task.completed
    lastClicked.value = id
    setTimeout(() => {
      if (lastClicked.value === id) lastClicked.value = null
    }, 300)
  }
}
</script>
