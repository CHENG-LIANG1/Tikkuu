<template>
  <section id="stories" class="py-32 relative">
    <div class="px-6 lg:px-12">
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div>
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/30 text-pink-400 text-sm mb-6">
              <span class="i-carbon-book text-lg"></span>
              <span class="uppercase tracking-widest">Stories</span>
            </div>
            <h2 class="display-medium text-white">
              Before the <span class="text-gradient">Snow Melts</span>
            </h2>
          </div>
          <div class="text-white/40 text-right">
            <div class="text-5xl font-bold text-gradient mb-2">10</div>
            <div class="text-sm uppercase tracking-widest">个精彩章节</div>
          </div>
        </div>
        
        <!-- Stories list - Accordion style -->
        <div class="space-y-4">
          <div 
            v-for="(story, index) in stories" 
            :key="story.id"
            class="group"
          >
            <!-- Header bar -->
            <button
              class="w-full relative overflow-hidden rounded-2xl transition-all duration-500"
              :class="expandedId === story.id ? 'bg-white/5' : 'bg-white/[0.02] hover:bg-white/[0.04]'"
              :style="{ border: `1px solid ${expandedId === story.id ? story.color + '40' : 'rgba(255,255,255,0.05)'}` }"
              @click="toggleExpand(story.id)"
            >
              <div class="flex items-center gap-6 p-6">
                <!-- Number -->
                <div 
                  class="w-14 h-14 rounded-xl flex items-center justify-center text-xl font-bold transition-all duration-300"
                  :class="expandedId === story.id ? 'scale-110' : 'group-hover:scale-105'"
                  :style="{ 
                    backgroundColor: expandedId === story.id ? story.color + '20' : 'rgba(255,255,255,0.03)',
                    color: story.color,
                    border: `2px solid ${expandedId === story.id ? story.color : 'transparent'}`
                  }"
                >
                  {{ String(index + 1).padStart(2, '0') }}
                </div>
                
                <!-- Info -->
                <div class="flex-1 text-left">
                  <div class="flex items-center gap-3 mb-1 flex-wrap">
                    <h3 class="text-xl font-bold text-white group-hover:text-gradient transition-all">
                      {{ story.title }}
                    </h3>
                    <span 
                      v-if="story.badge"
                      class="px-3 py-1 rounded-full text-xs font-bold"
                      :style="{ backgroundColor: story.color + '15', color: story.color }"
                    >
                      {{ story.badge }}
                    </span>
                  </div>
                  <div class="flex items-center gap-4 text-sm text-white/30">
                    <span class="flex items-center gap-1.5">
                      <span class="i-carbon-calendar"></span>
                      {{ story.date }}
                    </span>
                    <span class="flex items-center gap-1.5">
                      <span class="i-carbon-location"></span>
                      {{ story.location }}
                    </span>
                  </div>
                </div>
                
                <!-- Icon -->
                <div class="hidden sm:flex w-10 h-10 rounded-lg items-center justify-center" :style="{ backgroundColor: story.color + '15', color: story.color }">
                  <span :class="story.icon"></span>
                </div>
                
                <!-- Expand arrow -->
                <div 
                  class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border"
                  :class="expandedId === story.id 
                    ? 'rotate-180 border-white/20 bg-white/10' 
                    : 'border-white/10 bg-transparent group-hover:border-white/20 group-hover:bg-white/5'"
                >
                  <span 
                    class="i-carbon-chevron-down transition-colors"
                    :class="expandedId === story.id ? 'text-white' : 'text-white/40 group-hover:text-white/60'"
                  ></span>
                </div>
              </div>
              
              <!-- Progress bar -->
              <div 
                class="absolute bottom-0 left-0 h-0.5 transition-all duration-500"
                :style="{ 
                  width: expandedId === story.id ? '100%' : '0%',
                  background: `linear-gradient(90deg, ${story.color}, transparent)`
                }"
              ></div>
            </button>
            
            <!-- Expanded content -->
            <div 
              v-show="expandedId === story.id"
              class="overflow-hidden transition-all duration-500"
              :style="{ 
                maxHeight: expandedId === story.id ? '1000px' : '0',
                opacity: expandedId === story.id ? 1 : 0
              }"
            >
              <div 
                class="mt-4 rounded-2xl p-8"
                :style="{ 
                  background: `linear-gradient(145deg, ${story.color}08 0%, rgba(15,23,42,0.5) 100%)`,
                  border: `1px solid ${story.color}15`
                }"
              >
                <div class="prose prose-invert max-w-none">
                  <p 
                    v-for="(paragraph, pIndex) in story.content.split('\n\n').filter(p => p.trim())" 
                    :key="pIndex"
                    class="text-white/60 leading-relaxed mb-6 last:mb-0 text-lg"
                  >
                    {{ paragraph }}
                  </p>
                </div>
                
                <!-- Close button -->
                <div class="mt-8 flex justify-end">
                  <button 
                    class="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm text-white/60 hover:text-white bg-white/[0.05] hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200"
                    @click.stop="expandedId = null"
                  >
                    <span>收起</span>
                    <span class="i-ph-caret-up"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const expandedId = ref<string | null>(null)

function toggleExpand(id: string) {
  expandedId.value = expandedId.value === id ? null : id
}

const stories = [
  {
    id: 'intro',
    title: 'Before the Snow Melts',
    date: '序章',
    location: '计划阶段',
    icon: 'i-ph-scroll',
    color: '#8B5CF6',
    badge: '前言',
    content: `从我大手一挥，抢下 Coldplay 的演唱会门票后，我和竹宝就在规划我们的婚假出行计划了。但我们那时除了两张演唱会门票，我们可以说是什么都没有。竹宝连护照都没有，而我的护照没几个月就要过期了。

与此同时，我们还要逐步预定机票和酒店。在 GPT 的帮助下，我们在地图选点，决定 4.23 ～ 4.26 在韩国，4.26 ～ 5.9 在日本，期间经过东京、富士山、静冈、名古屋和大阪，把我们十几天的婚假塞得满满当当。

为什么我要写下这么多，因为文字是永恒的，在我精心的同步下，我的文字永远不会消失。这个世界上会有人比我更爱竹吗，我认为没有，我就是这个世界上最会赏竹的人。`
  },
  {
    id: 'wedding',
    title: '领证日',
    date: '2024.08.24',
    location: '江宁市民中心',
    icon: 'i-ph-airplane-tilt',
    color: '#EC4899',
    badge: '里程碑',
    content: `这是我和竹预约领证的日期，距离我们第一次见面已经过去了三个月。同时，那也是林宥嘉 IDOL 演唱会南京场举办的日子。

至于为什么选在这一天，从上帝视角来看，是因为竹的锁屏密码是 240824，是因为我和竹在乐高乐园刻下了 240824 的 brick，是因为科比曾使用过 8 号和 24 号。

到了江宁市民中心，几乎没人领证，不需要排队，我和竹直接进入一条龙服务，一气呵成。竹 OOTD 是粉色的玻璃窗，超好看。`
  },
  {
    id: 'korea1',
    title: '抵达首尔',
    date: '2025.04.23',
    location: '首尔江南',
    icon: 'i-ph-map-pin',
    color: '#8B5CF6',
    content: `这是宝宝第一次出国，一路上，在我的引导下，一切都异常顺利。从仁川到江南的良才站，坐地铁要两个多小时。下地铁后步行10分钟我们就到了东横inn。

我们下楼走进了一家漆黑的小巷子，有一家烤肉店亮着灯，我们一进去就被认出了是中国人，并且接受了宾至如归的中文服务。但吃饭的时候我们几乎无法进行交流，因为隔壁桌有一桌很吵的韩国人，说话声音震天响，这个也和韩剧里一模一样。`
  },
  {
    id: 'coldplay1',
    title: '第一场 Coldplay 演唱会',
    date: '2025.04.24',
    location: '首尔高阳体育馆',
    icon: 'i-ph-music-notes',
    color: '#8B5CF6',
    badge: '梦想成真',
    content: `整场演唱会的体验很难用文字描述，这是我第一次看内场站着的演唱会，几乎从头蹦到尾。Sparks, Yellow, Fix you, A Sky Full of Stars, Viva La Vida 这几首歌是我的最爱。

在唱 Sparks 的时候，Martin 走到了延伸舞台，周围的人全部靠过去，我觉得我们之间的距离不过十几米，简直就在我眼皮底下唱。

我记得我们在刚在一起的时候许过一个愿望，我说我希望能看一次 Ed Sheeran 的演唱会，竹宝说想看 Coldplay，这两个愿望在我们在一起的一年之内就尽数实现了。`
  },
  {
    id: 'passport',
    title: '护照惊魂',
    date: '2025.04.25',
    location: '首尔瑞草警察局',
    icon: 'i-ph-warning-circle',
    color: '#EF4444',
    badge: '惊险',
    content: `演唱会后发现护照不见了，翻遍了酒店和包包都没有。凌晨两点，我把护照翻译成韩文在 lost and found 网站搜索，发现有人几小时前交到瑞草第二警察局。步行800米，护照失而复得。

韩国这个 lost and found 联网系统真的很高效。护照失而复得之后，我们的日本之行又可以无缝衔接上了，这次我很坚定地相信幸运之神是站在我们这边的。`
  },
  {
    id: 'tokyo',
    title: '秋叶原巡礼',
    date: '2025.04.27',
    location: '东京',
    icon: 'i-ph-map-pin',
    color: '#06B6D4',
    content: `刚走出酒店，就是一个宫崎骏风格的钟，棕色的，很大很好看。宝宝简直美得和周围不在同一个图层。用语言完全无法形容竹宝的美貌。

我们在秋叶原买了漫画、手办、玩具、冰箱贴，还抓了娃娃。就当我以为我们疯狂扫货的一天已经结束时，我们在万代店看到了合金的 Hello Kitty，限时限量，机不可失，我和竹一人买了一台。`
  },
  {
    id: 'fuji',
    title: '富士山下',
    date: '2025.04.29 - 04.30',
    location: '河口湖',
    icon: 'i-ph-mountains',
    color: '#22D3EE',
    badge: '最出片',
    content: `富士山可以说是世界上知名度最高的山，甚至有自己的 emoji 🗻。我们八点多就到了山中湖，看到了好多大白鹅。我用我无与伦比的拍照技术，同时拍下了竹+樱花+富士山这个经典的画面。

在一年之前，我连约竹吃钱多多都约不出来，而我现在已经带着竹来到了富士山，这就是我的执行力。`
  },
  {
    id: 'shizuoka',
    title: '小丸子乐园',
    date: '2025.05.01',
    location: '静冈',
    icon: 'i-ph-cookie-fill',
    color: '#EC4899',
    content: `此次日本之行，给我留下印象最深刻的地方就是静冈，节奏慢，有文化气息。小丸子就是竹，竹就是小丸子，了解了小丸子就了解了竹。

小丸子乐园里，竹宝就像完全融入了场景里面，谁还分得清她和小丸子。我们在小丸子乐园门口还拍了大头贴，下载了生成的视频。`
  },
  {
    id: 'nagoya',
    title: '乐高乐园',
    date: '2025.05.03',
    location: '名古屋',
    icon: 'i-ph-squares-four',
    color: '#F472B6',
    content: `我们在乐高乐园定制了一个写有我们名字和领证日期的红色砖块，这个砖块选择挂在门口的板子上，每次进门都能看见。

那天的天气非常好，竹穿的是棕色的小裙子。在日本的地标东京塔面前，我们似乎留下了整个行程中的唯一一张他拍合照。`
  },
  {
    id: 'osaka',
    title: '大阪 finale',
    date: '2025.05.04 - 05.09',
    location: '大阪',
    icon: 'i-ph-star-fill',
    color: '#FBBF24',
    content: `我们去坐了大阪梅田的地标摩天轮，又大又红的那个，建在楼顶上，非常高，竹到一半高度的时候就不敢往下看了。

我们的 USJ 1.5 day pass 让我们玩了好多项目。竹宝喜欢吃鳗鱼饭，我们在回转寿司餐厅里，我查询了鳗鱼的日语发音后和寿司师傅直接点餐：simimasen, unagi please.`
  }
]
</script>
