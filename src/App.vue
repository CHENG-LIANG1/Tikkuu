<template>
  <div class="relative min-h-screen bg-dark overflow-x-hidden selection:bg-purple-500/50">
    <!-- Custom cursor -->
    <CustomCursor />
    
    <!-- Dynamic Background -->
    <DynamicBackground />
    
    <!-- Navigation -->
    <NavBar />
    
    <!-- Main Content -->
    <main>
      <HeroSection />
      <JourneySection />
      <StoriesSection />
      <TasksSection />
      <ContactSection />
    </main>
    
    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import CustomCursor from './components/CustomCursor.vue'
import DynamicBackground from './components/DynamicBackground.vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import JourneySection from './components/JourneySection.vue'
import StoriesSection from './components/StoriesSection.vue'
import TasksSection from './components/TasksSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>
