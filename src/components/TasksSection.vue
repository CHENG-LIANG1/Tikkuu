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
                : 'text-white/40 border-white/5 hover:border-white/10 hover:text-white/60'"
              :style="activeCategory === cat.id ? { 
                background: `linear-gradient(135deg, ${cat.color} 0%, ${cat.color}dd 100%)`,
                boxShadow: `0 8px 40px ${cat.color}40`
              } : { backgroundColor: 'rgba(255,255,255,0.02)' }"
              @click="activeCategory = cat.id"
            >
              <span class="text-xl">{{ cat.icon }}</span>
              <span class="uppercase tracking-wider">{{ cat.name }}</span>
              <span 
                v-if="activeCategory === cat.id"
                class="ml-2 px-2 py-0.5 rounded-full bg-black/20 text-xs"
              >
                {{ getCategoryProgress(cat.id) }}
              </span>
            </button>
          </div>
        </div>
        
        <!-- Tasks grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <button
            v-for="task in filteredTasks"
            :key="task.id"
            class="group relative text-left transition-transform duration-200"
            :class="lastClicked === task.id ? 'scale-95' : ''"
            @click="toggleTask(task.id)"
          >
            <div 
              class="relative h-full min-h-[160px] p-5 rounded-2xl transition-all duration-300"
              :style="{
                background: task.completed 
                  ? `linear-gradient(145deg, ${getCategoryColor(task.category)}20 0%, rgba(15,23,42,0.9) 100%)`
                  : 'linear-gradient(145deg, rgba(30,27,75,0.5) 0%, rgba(15,23,42,0.7) 100%)',
                border: `1px solid ${task.completed ? getCategoryColor(task.category) + '60' : 'rgba(255,255,255,0.08)'}`,
                boxShadow: task.completed ? `0 4px 20px ${getCategoryColor(task.category)}30` : 'none'
              }"
            >
              <!-- Top: Number, icon and check -->
              <div class="flex items-start justify-between mb-3">
                <div class="flex items-center gap-2">
                  <span class="text-xs font-mono text-white/30">#{{ String(task.id).padStart(3, '0') }}</span>
                  <div 
                    class="w-7 h-7 rounded-lg flex items-center justify-center text-sm"
                    :style="{ 
                      backgroundColor: getCategoryColor(task.category) + '20',
                      color: getCategoryColor(task.category)
                    }"
                  >
                    {{ getCategoryIcon(task.category) }}
                  </div>
                </div>
                
                <!-- Check status -->
                <div 
                  class="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300"
                  :style="{
                    backgroundColor: task.completed ? getCategoryColor(task.category) : 'rgba(255,255,255,0.1)',
                    border: `2px solid ${task.completed ? getCategoryColor(task.category) : 'rgba(255,255,255,0.2)'}`
                  }"
                >
                  <span 
                    class="i-carbon-checkmark text-xs text-white"
                    :style="{ opacity: task.completed ? 1 : 0 }"
                  ></span>
                </div>
              </div>
              
              <!-- Task text -->
              <p 
                class="text-[14px] leading-relaxed"
                :style="{ color: task.completed ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.5)' }"
              >
                {{ task.text }}
              </p>
              
              <!-- Done badge -->
              <div 
                v-if="task.completed"
                class="absolute bottom-3 right-3 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider"
                :style="{ 
                  backgroundColor: getCategoryColor(task.category) + '30',
                  color: getCategoryColor(task.category)
                }"
              >
                Done
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { coupleTasks, categories, getCategoryColor, type Task } from '../data/tasks'

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

function getCategoryProgress(categoryId: string) {
  if (categoryId === 'all') return `${completedCount.value}/150`
  const catTasks = tasks.value.filter(t => t.category === categoryId)
  const completed = catTasks.filter(t => t.completed).length
  return `${completed}/${catTasks.length}`
}

function getCategoryIcon(categoryId: string) {
  const cat = categories.find(c => c.id === categoryId)
  return cat?.icon || '✨'
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
