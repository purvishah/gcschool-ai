<script setup>
import { Calendar, Award, Camera, Users, ArrowRight, Star } from "lucide-vue-next"

const features = [
  {
    icon: Award,
    title: "Academic Excellence",
    description:
      "Consistent top performance in board examinations and competitive entrance tests.",
    color: "text-yellow-500",
  },
  {
    icon: Users,
    title: "Experienced Faculty",
    description: "Dedicated teachers with years of experience in nurturing young minds.",
    color: "text-blue-500",
  },
  {
    icon: Star,
    title: "Holistic Development",
    description:
      "Focus on overall personality development through academics, sports, and cultural activities.",
    color: "text-green-500",
  },
  {
    icon: Camera,
    title: "Modern Infrastructure",
    description: "Well-equipped classrooms, laboratories, library, and sports facilities.",
    color: "text-purple-500",
  },
]

const news = [
  {
    date: "March 15, 2024",
    title: "Annual Science Exhibition 2024",
    description:
      "Students showcase innovative projects in science and technology. Winners to represent school at state level.",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop&crop=center",
    category: "Events",
  },
  {
    date: "March 10, 2024",
    title: "Board Exam Results Announced",
    description:
      "G.C.High School achieves 98% pass rate in Class 10 and 95% in Class 12 board examinations.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop&crop=center",
    category: "Achievements",
  },
  {
    date: "March 5, 2024",
    title: "Inter-School Sports Championship",
    description:
      "Our athletes bring home 15 medals from the district-level sports competition.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center",
    category: "Sports",
  },
]
</script>

<template>
  <section class="py-16 bg-background">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Why Choose Us -->
      <div class="mb-20 hidden">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose G.C.High School?
          </h2>
          <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
            Over 70 years of educational excellence, nurturing generations of successful
            students who have excelled in various fields of life.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="bg-secondary rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300 group"
          >
            <div class="mb-4">
              <component
                :is="feature.icon"
                :class="`h-12 w-12 ${feature.color} mx-auto group-hover:scale-110 transition-transform duration-300`"
              />
            </div>
            <h3 class="text-xl font-semibold text-foreground mb-3">
              {{ feature.title }}
            </h3>
            <p class="text-muted-foreground leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Latest News -->
      <div>
        <div class="flex flex-col sm:flex-row justify-between items-center mb-12">
          <div>
            <h2 class="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Latest News & Events
            </h2>
            <p class="text-lg text-muted-foreground">
              Stay updated with the latest happenings at our school.
            </p>
          </div>
          <button
            class="mt-4 sm:mt-0 inline-flex items-center bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-primary/90"
          >
            View All News
            <ArrowRight class="ml-2 h-4 w-4" />
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="(item, index) in news"
            :key="index"
            class="bg-card rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
          >
            <div class="relative overflow-hidden">
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div class="absolute top-4 left-4">
                <span
                  class="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium"
                >
                  {{ item.category }}
                </span>
              </div>
            </div>

            <div class="p-6">
              <div class="flex items-center text-muted-foreground text-sm mb-3">
                <Calendar class="h-4 w-4 mr-2" />
                {{ item.date }}
              </div>

              <h3
                class="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300"
              >
                {{ item.title }}
              </h3>

              <p class="text-muted-foreground leading-relaxed mb-4">
                {{ item.description }}
              </p>

              <a
                href="#"
                class="inline-flex items-center text-primary hover:text-primary/80 font-medium"
              >
                Read More
                <ArrowRight
                  class="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300"
                />
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
