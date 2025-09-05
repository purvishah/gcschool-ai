<template>
  <footer class="bg-foreground text-card">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="lg:col-span-1">
          <div class="flex items-center space-x-3 mb-6">
            <div class="bg-primary p-2 rounded-lg">
              <svg viewBox="0 0 24 24" class="h-8 w-8 text-white" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 12L12 3 2 12"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"/>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold">G.C. HighSchool</h3>
              <p class="text-sm text-muted">Since 1950</p>
            </div>
          </div>
          <p class="text-muted mb-6 leading-relaxed">
            Sheth Girdharlal Chunilal High School Pilvai is committed to providing quality education and shaping future leaders through excellence in academics and character development.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-muted hover:text-primary transition-colors duration-200" aria-label="Facebook">📘</a>
            <a href="#" class="text-muted hover:text-primary transition-colors duration-200" aria-label="Twitter">🐦</a>
            <a href="#" class="text-muted hover:text-primary transition-colors duration-200" aria-label="Instagram">📸</a>
            <a href="#" class="text-muted hover:text-primary transition-colors duration-200" aria-label="YouTube">▶️</a>
          </div>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-6">Quick Links</h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.name">
              <a :href="link.href" class="text-muted hover:text-card transition-colors duration-200">{{ link.name }}</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-6">Academics</h4>
          <ul class="space-y-3">
            <li v-for="link in academicLinks" :key="link.name">
              <a :href="link.href" class="text-muted hover:text-card transition-colors duration-200">{{ link.name }}</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-6">Contact Info</h4>
          <div class="space-y-4">
            <div class="flex items-start space-x-3">
              <span class="text-primary mt-0.5">📍</span>
              <div>
                <p class="text-muted">Sheth Girdharlal Chunilal High School<br/>Pilvai, Gujarat, India</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <span class="text-primary">📞</span>
              <p class="text-muted">+91 XXXXX XXXXX</p>
            </div>
            <div class="flex items-center space-x-3">
              <span class="text-primary">✉️</span>
              <p class="text-muted">info@gchighschool.org</p>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-border mt-12 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-muted text-sm">© 2024 G.C. HighSchool. All rights reserved.</p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" class="text-muted hover:text-card text-sm transition-colors duration-200">Privacy Policy</a>
            <a href="/terms" class="text-muted hover:text-card text-sm transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Academics', href: '/academics' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Events', href: '/events' },
  { name: 'Contact', href: '/contact' },
];

const academicLinks = [
  { name: 'Prathmik Section', href: '/academics/prathmik' },
  { name: 'Higher Prathmic', href: '/academics/higher-prathmic' },
  { name: 'Secondary', href: '/academics/secondary' },
  { name: 'Examination Results', href: '/results' },
  { name: 'Academic Calendar', href: '/calendar' },
];
</script>
