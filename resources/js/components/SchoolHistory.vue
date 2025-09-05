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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
              <span class="text-base text-muted-foreground">{{ point }}</span>
            </li>
            <li>
              <a href="/about" class="inline-flex items-center text-primary hover:underline font-medium">Read more</a>
            </li>
          </ul>        
          <div class="flex flex-wrap gap-3">
            <a href="/about" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Learn About Us</a>
            <a href="/contact" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">Contact School</a>
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
