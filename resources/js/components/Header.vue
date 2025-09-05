<script setup>
import { ref } from "vue"
import BaseButton from './ui/BaseButton.vue';
import { Menu, X, GraduationCap } from "lucide-vue-next"

const isMenuOpen = ref(false)

const navigationLinks = [
  { name: "About Us", href: "/about" },
  { name: "Campus", href: "/campus" },
  { name: "Events", href: "/events" },
  { name: "Academics", href: "/academics" },
  { name: "Achievements", href: "/achievements" },
  { name: "Sports", href: "/sports" },
  { name: "Photo Gallery", href: "/gallery" },
  { name: "Future Plans", href: "/future-plans" },
  { name: "Contact Us", href: "/contact" },
]
</script>

<template>
  <header class="bg-card shadow-lg border-b-2 border-primary sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <!-- Logo and School Name -->
        <div class="flex items-center space-x-3">
          <div class="bg-primary p-2 rounded-lg">
            <GraduationCap class="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 class="text-xl lg:text-2xl font-bold text-foreground">
              G.C. HighSchool
            </h1>
            <p class="text-sm text-muted-foreground hidden sm:block">
              Sheth Girdharlal Chunilal High School Pilvai
            </p>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <div class="lg:hidden">
          <button
            @click="isMenuOpen = !isMenuOpen"
            class="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-accent transition-colors duration-200"
          >
            <X v-if="isMenuOpen" class="h-6 w-6" />
            <Menu v-else class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Desktop Navigation -->
    <div class="hidden lg:block bg-accent border-t border-t-[0.8px] border-border">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5">
        <nav class="flex items-center justify-between">
          <div class="flex items-center space-x-1">
            <a
              v-for="link in navigationLinks"
              :key="link.name"
              :href="link.href"
              class="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-card rounded-md transition-colors duration-200"
            >
              {{ link.name }}
            </a>
          </div>
          <button
            class="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md font-medium"
          >
            Donate Now
          </button>
        </nav>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <div v-if="isMenuOpen" class="lg:hidden bg-accent border-t border-border">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav class="flex flex-col space-y-2">
          <a
            v-for="link in navigationLinks"
            :key="link.name"
            :href="link.href"
            class="px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors duration-200"
            @click="isMenuOpen = false"
          >
            {{ link.name }}
          </a>
          <div class="pt-2"><BaseButton class="w-full text-sm">Donate Now</BaseButton></div>
        </nav>
      </div>
    </div>
  </header>
</template>
