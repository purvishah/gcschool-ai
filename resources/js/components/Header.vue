<script setup>
import { ref } from "vue"
import BaseButton from './ui/BaseButton.vue'
import { Menu, X } from "lucide-vue-next"

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
  <header class="relative w-full bg-card shadow-lg border-b-2 border-primary sticky top-0 z-50">
    <!-- Logo (absolute, large, spanning header height) -->
    <div class="absolute inset-0 flex items-center h-full z-50 max-w-[120px]">
      <img 
        src="/images/gcschool-logo.png" 
        alt="GC School"
        class="h-16 lg:h-28 w-auto object-contain p-2" 
      />
    </div>

    <!-- Top Section -->
    <div class="w-full bg-card">
      <div class="flex justify-between items-center py-1.5 px-4 sm:px-6 lg:px-8">
        <!-- School Name -->
        <div class="ml-12 md:ml-12 lg:ml-22"> <!-- reduced margin -->
          <h1 class="text-xl lg:text-2xl font-bold text-foreground">
            G.C.High School, Pilvai
          </h1>
          <p class="text-sm text-muted-foreground hidden sm:block">
            Sheth Girdharlal Chunilal High School
          </p>
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
    <div class="hidden lg:block bg-accent border-t border-border">
      <div class="flex items-center justify-between py-1.5 px-4 sm:px-6 lg:px-8 ml-22">
        <div class="flex items-center space-x-1">
          <a
            v-for="link in navigationLinks"
            :key="link.name"
            :href="link.href"
            class="px-1.5 xl:px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-card rounded-md transition-colors duration-200"
          >
            {{ link.name }}
          </a>
        </div>
        <button
          class="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md font-medium text-sm"
        >
          Donate Now
        </button>
      </div>
    </div>

    <!-- Fullscreen Mobile Navigation -->
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

        <!-- Nav Links -->
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
