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
    <img
      loading="lazy"
      srcset="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a"
      sizes="100vw"
      src="https://cdn.builder.io/api/v1/image/assets/YJIGb4i01jvw0SRdL5Bt/72c80f114dc149019051b6852a9e3b7a"
      alt="Decorative"
      class="w-full object-cover mt-5 min-h-[20px] min-w-[20px]"
      style="aspect-ratio: 1.42;"
    />
  </div>
</template>

<script setup lang="ts">
import HeroBanner from '../components/HeroBanner.vue';
import SchoolHistory from '../components/SchoolHistory.vue';
import Founders from '../components/Founders.vue';
import SchoolSections from '../components/SchoolSections.vue';
import FeaturesNews from '../components/FeaturesNews.vue';
</script>
