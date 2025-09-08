<template>
  <div class="relative w-full h-[420px] lg:h-[520px] overflow-hidden select-none">
    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-no-repeat"
      :style="bgStyle"
    >
      <div class="absolute inset-0 bg-black/30" />
    </div>

    <!-- Prev Button -->
    <button
      @click="prev"
      class="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-200"
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

    <!-- Next Button -->
    <button
      @click="next"
      class="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-200"
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
    <div
      class="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2"
    >
      <button
        v-for="(_, i) in slides"
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
import { onMounted, onUnmounted, ref, reactive, computed } from 'vue';

const currentSlide = ref(0);
const slides = reactive([
  { image: '/images/home/slider/Slider9-Main-BldgD.jpg' },
  { image: '/images/home/slider/Slider7-School-Inauguration.jpg' },
  { image: '/images/home/slider/Slider8-School-Inauguration.jpg' },
]);

const next = () => { currentSlide.value = (currentSlide.value + 1) % slides.length; };
const prev = () => { currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length; };

let timer: any;
onMounted(() => { timer = setInterval(next, 5000); });
onUnmounted(() => { clearInterval(timer); });

const bgStyle = computed(() => ({
  backgroundImage: `url(${slides[currentSlide.value].image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}));
</script>
