<template>
  <header class="bg-card shadow-lg border-b-2 border-primary sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <div class="flex items-center space-x-3">
          <div class="bg-primary p-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap h-8 w-8 text-white" aria-hidden="true"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
          </div>
          <div>
            <h1 class="text-xl lg:text-2xl font-bold text-foreground">G.C. HighSchool</h1>
            <p class="text-sm text-muted-foreground hidden sm:block">Sheth Girdharlal Chunilal High School Pilvai</p>
          </div>
        </div>

        <div class="lg:hidden">
          <button @click="isMenuOpen = !isMenuOpen" class="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-accent transition-colors duration-200">
            <svg v-if="!isMenuOpen" viewBox="0 0 24 24" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 6h18M3 12h18M3 18h18"/>
            </svg>
            <svg v-else viewBox="0 0 24 24" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="hidden lg:block bg-accent border-t border-t-[0.8px] border-border">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5">
        <nav class="flex items-center justify-between">
          <div class="flex items-center space-x-1">
            <a v-for="link in navigationLinks" :key="link.name" :href="link.href" class="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-warmCream rounded-md transition-colors duration-200">{{ link.name }}</a>
          </div>
          <BaseButton>Donate Now</BaseButton>
        </nav>
      </div>
    </div>

    <div v-if="isMenuOpen" class="lg:hidden bg-accent border-t border-border">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav class="flex flex-col space-y-2">
          <a v-for="link in navigationLinks" :key="link.name" :href="link.href" class="px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors duration-200" @click="isMenuOpen=false">{{ link.name }}</a>
          <div class="pt-2"><BaseButton class="w-full">Donate Now</BaseButton></div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BaseButton from './ui/BaseButton.vue';

const isMenuOpen = ref(false);
const navigationLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Campus', href: '/campus' },
  { name: 'Events', href: '/events' },
  { name: 'Academics', href: '/academics' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Sports', href: '/sports' },
  { name: 'Photo Gallery', href: '/gallery' },
  { name: 'Future Plans', href: '/future-plans' },
  { name: 'Contact Us', href: '/contact' },
];
</script>
