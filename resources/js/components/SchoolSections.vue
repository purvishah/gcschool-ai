<template>
  <section class="py-16 bg-secondary">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Educational Sections</h2>
        <p class="text-lg text-muted-foreground max-w-3xl mx-auto">G.C. HighSchool provides comprehensive education across three main sections, ensuring holistic development from early childhood to college preparation.</p>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div v-for="section in sections" :key="section.title" class="bg-card rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
          <div class="p-8">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
              <span class="text-white text-xl">{{ section.icon }}</span>
            </div>
            <div class="mb-4">
              <h3 class="text-2xl font-bold text-foreground mb-2">
                <span v-for="(line,i) in section.title.split('\n')" :key="i">
                  {{ line }}<br v-if="i < section.title.split('\n').length-1" />
                </span>
              </h3>
              <p class="text-primary font-semibold mb-2">{{ section.subtitle }}</p>
              <div class="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">{{ section.ageRange }}</div>
            </div>
            <p class="text-muted-foreground mb-6 leading-relaxed">{{ section.description }}</p>
            <BaseButton class="w-full">Learn More</BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from './ui/BaseButton.vue';

const sections = [
  { title: 'Prathmik', subtitle: 'Kindergarten & Classes 1-5', description: 'Building strong foundations with interactive learning methods and creative activities that nurture young minds.', ageRange: 'Ages 3-10', icon: '📘' },
  { title: 'Higher Prathmic', subtitle: 'Classes 6-8', description: 'Transitioning to advanced learning with comprehensive curriculum that prepares students for higher education.', ageRange: 'Ages 11-13', icon: '👩‍🏫' },
  { title: 'Secondary-\nHigher Secondary', subtitle: 'Classes 9-12', description: 'Comprehensive education with specialized streams preparing students for competitive examinations and career choices.', ageRange: 'Ages 14-18', icon: '🏆' },
];
</script>
