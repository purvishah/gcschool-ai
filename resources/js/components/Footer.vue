<script setup>
import {
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-vue-next";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Admissions", href: "/admissions" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

const academicLinks = [
  { name: "Prathmik Section", href: "/academics/prathmik" },
  { name: "Higher Prathmic", href: "/academics/higher-prathmic" },
  { name: "Secondary", href: "/academics/secondary" },
  { name: "Examination Results", href: "/results" },
  { name: "Academic Calendar", href: "/calendar" },
];
</script>

<template>
  <footer class="bg-foreground text-card">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- School Info -->
        <div class="lg:col-span-2">
          <div class="flex items-center space-x-3 mb-6">
            <img src="/images/gcschool-logo.png" alt="GC School" class="h-32 w-auto" loading="lazy" />
            <div>
              <h3 class="text-xl font-bold">G.C.High School</h3>
              <p class="text-sm text-muted">Since 1927</p>
            </div>
          </div>
          <p class="text-muted mb-6 leading-relaxed">
            Sheth Girdharlal Chunilal High School Pilvai is committed to providing quality
            education and shaping future leaders through excellence in academics and
            character development.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-muted hover:text-primary transition-colors duration-200">
              <Facebook class="h-5 w-5" />
            </a>
            <a href="#" class="text-muted hover:text-primary transition-colors duration-200">
              <Twitter class="h-5 w-5" />
            </a>
            <a href="#" class="text-muted hover:text-primary transition-colors duration-200">
              <Instagram class="h-5 w-5" />
            </a>
            <a href="#" class="text-muted hover:text-primary transition-colors duration-200">
              <Youtube class="h-5 w-5" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold mb-6">Quick Links</h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.name">
              <a
                :href="link.href"
                class="text-muted hover:text-card transition-colors duration-200"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-lg font-semibold mb-6">Contact Info</h4>
          <div class="space-y-4">
            <div class="flex items-start space-x-3">
              <MapPin class="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p class="text-muted">
                  Sheth Girdharlal Chunilal High School<br />
                  Pilvai, Gujarat, India
                </p>
              </div>
            </div>

            <div class="flex items-center space-x-3">
              <Phone class="h-5 w-5 text-primary flex-shrink-0" />
              <p class="text-muted">+91 XXXXX XXXXX</p>
            </div>

            <div class="flex items-center space-x-3">
              <Mail class="h-5 w-5 text-primary flex-shrink-0" />
              <p class="text-muted"><a href="mailto:gcpilvai@gmail.com">gcpilvai@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-border mt-12 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-muted text-sm">
            © 2024 G.C.High School. All rights reserved.
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a
              href="/privacy"
              class="text-muted hover:text-card text-sm transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              class="text-muted hover:text-card text-sm transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
