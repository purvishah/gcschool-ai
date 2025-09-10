<template>
  <div class="min-h-screen bg-background">
    <Header />
    <main>
      <HeroBanner />
      <SchoolHistory />
      <Founders />
      <SchoolSections />
      <FeaturesNews />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import HeroBanner from '../components/HeroBanner.vue';
import SchoolHistory from '../components/SchoolHistory.vue';
import Founders from '../components/Founders.vue';
import SchoolSections from '../components/SchoolSections.vue';
import FeaturesNews from '../components/FeaturesNews.vue';
</script>
