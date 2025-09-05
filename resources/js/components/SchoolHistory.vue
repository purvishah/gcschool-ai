<template>
  <section class="py-16 bg-secondary">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div class="relative group overflow-hidden rounded-2xl shadow-lg bg-card lg:order-2">
          <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1400&h=900&fit=crop&crop=center" alt="G.C. HighSchool campus" class="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105" loading="lazy" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
        <div class="lg:order-1">
          <h2 class="text-3xl lg:text-4xl font-bold text-foreground mb-4">Welcome to Sheth G. C. High School</h2>
          <ul class="space-y-3 mb-8">
            <li v-for="(point,i) in highlights" :key="i" class="flex items-start gap-3 text-foreground">
              <span class="w-5 h-5 mt-0.5">✅</span>
              <span class="text-base text-muted-foreground">{{ point }}</span>
            </li>
          </ul>
          <div class="flex flex-wrap gap-3">
            <BaseButton as="a" href="/about" variant="outline">Read more</BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from './ui/BaseButton.vue';

const highlights = [
  'Established in 1927.',
  'Expanded in 1933 and further expanded in 1951',
  'Recognized as SSC board exam centre in 1965.',
  'School achieved first rank in Bombay state in 1953 and categorized in Grade A.',
  'School Science Project Selected at Nation Level and Displayed at Pune Science Fair In 2006.',
  'From KG To std – IV (Pre Primary) Was Started In 2010',
  'Ex-Students Strength is Approx. 30000+',
];
</script>
