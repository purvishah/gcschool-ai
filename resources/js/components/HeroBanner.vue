<template>
  <div class="relative w-full h-[420px] lg:h-[520px] overflow-hidden select-none">
    <div class="absolute inset-0 bg-no-repeat" :style="bgStyle">
      <div class="absolute inset-0 bg-black/40" />
    </div>

    <div class="relative z-10 flex items-center justify-center h-full">
      <div class="text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">{{ slides[currentSlide].title }}</h1>
        <h2 class="text-xl sm:text-2xl lg:text-3xl font-light mb-6 text-blue-100">{{ slides[currentSlide].subtitle }}</h2>
        <p class="text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">{{ slides[currentSlide].description }}</p>
        <BaseButton size="lg" class="px-8 py-3 text-lg font-semibold">{{ slides[currentSlide].cta }}</BaseButton>
      </div>
    </div>

    <button @click="prev" class="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200">
      <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
    </button>
    <button @click="next" class="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200">
      <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
    </button>

    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
      <button v-for="(_,i) in slides" :key="i" @click="currentSlide = i" :class="['w-3 h-3 rounded-full transition-all duration-200', i===currentSlide?'bg-white':'bg-white/50']" />
    </div>

    <div class="absolute hidden bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-3 gap-6 text-white text-center">
          <div class="flex items-center justify-center space-x-2">
            <Users class="h-5 w-5 text-blue-300" />
            <div><div class="text-lg font-bold">2000+</div><div class="text-sm text-gray-300">Students</div></div>
          </div>
          <div class="flex items-center justify-center space-x-2">
            <Calendar class="h-5 w-5 text-green-300" />
            <div><div class="text-lg font-bold">70+</div><div class="text-sm text-gray-300">Years</div></div>
          </div>
          <div class="flex items-center justify-center space-x-2">
            <Award class="h-5 w-5 text-yellow-300" />
            <div><div class="text-lg font-bold">500+</div><div class="text-sm text-gray-300">Awards</div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref, computed } from 'vue';
import { ChevronLeft, ChevronRight, Calendar, Users, Award } from "lucide-vue-next"
import BaseButton from './ui/BaseButton.vue';

const currentSlide = ref(0);
const slides = reactive([
  { title: 'Excellence in Education Since 1950', subtitle: "Shaping Tomorrow's Leaders Today", description: 'Join our community of learners where tradition meets innovation in providing quality education.', image: '/images/home/slider/Slider7-School-Inauguration.jpg', cta: 'Learn More' },
  { title: 'Science Exhibition Winners', subtitle: 'Innovation and Discovery', description: 'Congratulations to our students for winning regional science fair with their innovative projects.', image: '/images/home/slider/Slider5-School-Inauguration.jpg', cta: 'Read More' },
  { title: 'Annual Sports Day 2024', subtitle: 'Celebrating Athletic Excellence', description: "Our students showcased exceptional talent and sportsmanship at this year's inter-house sports competition.", image: '/images/home/slider/Slider6-School-Inauguration.jpg', cta: 'View Gallery' },
  { title: 'Excellence in Education Since 1950', subtitle: "Shaping Tomorrow's Leaders Today", description: 'Join our community of learners where tradition meets innovation in providing quality education.', image: '/images/home/slider/Slider4-School-Inauguration.jpg', cta: 'Learn More' },
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
