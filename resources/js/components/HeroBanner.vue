<template>
  <div class="relative w-full h-[420px] lg:h-[520px] overflow-hidden select-none">
    <!-- Background slide with transition -->
    <div class="absolute inset-0">
      <Transition name="slide-only">
        <div
          :key="currentSlide"
          class="absolute inset-0 bg-no-repeat"
          :style="bgStyle"
        >
          <div class="absolute inset-0 bg-black/25" />
        </div>
      </Transition>
    </div>

    <!-- Content -->
    <div class="relative z-10 flex items-center justify-center h-full">
      <div class="text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-shadow-lg text-shadow-black/50">
          {{ slides[currentSlide].title }}
        </h1>
        <h2
          v-if="slides[currentSlide].subtitle"
          class="text-xl sm:text-2xl lg:text-3xl font-light mb-6 text-blue-100"
        >
          {{ slides[currentSlide].subtitle }}
        </h2>
        <p class="text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          {{ slides[currentSlide].description }}
        </p>
        <BaseButton size="lg" class="px-8 py-3 text-lg font-semibold">
          {{ slides[currentSlide].cta }}
        </BaseButton>
      </div>
    </div>

    <!-- Navigation buttons -->
    <button
      @click="prev"
      class="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200"
    >
      <svg
        viewBox="0 0 24 24"
        class="h-6 w-6"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M15 18l-6-6 6-6" />
      </svg>
    </button>
    <button
      @click="next"
      class="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200"
    >
      <svg
        viewBox="0 0 24 24"
        class="h-6 w-6"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M9 18l6-6-6-6" />
      </svg>
    </button>

    <!-- Dots -->
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
      <button
        v-for="(_,i) in slides"
        :key="i"
        @click="currentSlide = i"
        :class="[
          'w-3 h-3 rounded-full transition-all duration-200',
          i === currentSlide ? 'bg-white' : 'bg-white/50'
        ]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref, computed } from "vue";
import BaseButton from "./ui/BaseButton.vue";

const currentSlide = ref(0);
const slides = reactive([
  {
    title: "Established in 1927",
    description:
      "Providing quality education to children from all sections of society at affordable costs",
    image: "/images/home/slider/Slider7-School-Inauguration.jpg",
    cta: "Learn More",
  },
  {
    title: "Inauguration Ceremony",
    description:
      "Presided over by Honourable Home Minister Shri Amitbhai Shah.",
    image: "/images/home/slider/Slider4-School-Inauguration.jpg",
    cta: "Learn More",
  },
]);

const next = () =>
  (currentSlide.value = (currentSlide.value + 1) % slides.length);
const prev = () =>
  (currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length);

let timer: any;
onMounted(() => {
  timer = setInterval(next, 5000);
});
onUnmounted(() => {
  clearInterval(timer);
});

const bgStyle = computed(() => ({
  backgroundImage: `url(${slides[currentSlide.value].image})`,
  backgroundSize: "cover",
  backgroundPosition: "top",
}));
</script>

<style scoped>
.slide-only-enter-active,
.slide-only-leave-active {
  transition: transform 0.7s ease-in-out;
  position: absolute;
  width: 100%;
  height: 100%;
}

/* Slide in from right */
.slide-only-enter-from {
  transform: translateX(100%);
}
.slide-only-enter-to {
  transform: translateX(0);
}

/* Slide out to left */
.slide-only-leave-from {
  transform: translateX(0);
}
.slide-only-leave-to {
  transform: translateX(-100%);
}
</style>
