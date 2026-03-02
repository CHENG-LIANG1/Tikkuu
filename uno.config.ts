import { defineConfig, presetUno, presetAttributify } from 'unocss'
import presetIcons from '@unocss/preset-icons'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
  transformers: [
    transformerDirectives(),
  ],
  safelist: [
    // Phosphor icons for tasks
    'i-ph-sparkle-fill', 'i-ph-airplane-fill', 'i-ph-bowl-food-fill', 'i-ph-heart-fill',
    'i-ph-house-fill', 'i-ph-target-fill', 'i-ph-book-open-fill', 'i-ph-star-fill',
    // Phosphor icons for stories
    'i-ph-scroll', 'i-ph-airplane-tilt', 'i-ph-warning-circle', 
    'i-ph-map-pin', 'i-ph-mountains', 'i-ph-music-notes',
    'i-ph-cookie-fill', 'i-ph-squares-four', 'i-ph-caret-up', 'i-ph-caret-down',
  ],
  theme: {
    colors: {
      primary: '#C8FF2E',
      dark: '#0a0a0a',
      'dark-lighter': '#141414',
      'dark-card': '#1a1a1a',
    }
  },
  shortcuts: {
    'btn': 'px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer',
    'btn-primary': 'btn bg-primary text-black hover:opacity-90',
    'card': 'bg-dark-card rounded-2xl p-6 border border-white/5',
    'gradient-text': 'bg-gradient-to-r from-primary via-lime-400 to-emerald-400 bg-clip-text text-transparent',
  }
})
