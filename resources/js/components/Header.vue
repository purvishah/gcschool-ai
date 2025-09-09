<script setup>
import { ref } from "vue"
import BaseButton from './ui/BaseButton.vue'
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
      <div class="flex justify-between items-center py-1.5">
        <!-- Logo and School Name -->
        <div class="flex items-center space-x-3">
          <img src="/images/gcschool-logo.png" alt="GC School" class="h-16 w-auto" loading="lazy" />
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
            @click="isMenuOpen = true"
            class="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-accent transition-colors duration-200"
          >
            <Menu class="h-6 w-6" />
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
            class="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md font-medium text-sm"
          >
            Donate Now
          </button>
        </nav>
      </div>
    </div>

    <!-- Fullscreen Mobile Navigation Overlay -->
    <transition name="fade">
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 bg-accent z-50 flex flex-col"
      >
        <!-- Close Button -->
        <div class="flex justify-end p-4 border-b border-border">
          <button
            @click="isMenuOpen = false"
            class="p-2 rounded-md text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <X class="h-8 w-8" />
          </button>
        </div>

        <!-- Navigation Links (Top-down list) -->
        <nav class="flex-1 px-6 py-6 space-y-3 overflow-y-auto">
          <a
            v-for="link in navigationLinks"
            :key="link.name"
            :href="link.href"
            class="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-card rounded-md transition-colors duration-200"
            @click="isMenuOpen = false"
          >
            {{ link.name }}
          </a>

          <div class="pt-4">
            <BaseButton class="w-full text-sm">Donate Now</BaseButton>
          </div>
        </nav>
      </div>
    </transition>
  </header>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
