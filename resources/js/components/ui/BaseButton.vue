<template>
  <component
    :is="props.as"
    :href="props.as === 'a' ? props.href : undefined"
    :type="props.as === 'button' ? props.type : undefined"
    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&>svg]:pointer-events-none"
    :class="[variantClasses, sizeClasses]"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type Variant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
type Size = 'default' | 'sm' | 'lg' | 'icon';

const props = defineProps<{
  as?: 'button' | 'a';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: Variant;
  size?: Size;
}>();

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'destructive':
      return 'bg-destructive text-destructive-foreground hover:bg-destructive/90';
    case 'outline':
      return 'border border-input bg-background hover:bg-accent hover:text-accent-foreground';
    case 'secondary':
      return 'bg-secondary text-secondary-foreground hover:bg-secondary/80';
    case 'ghost':
      return 'hover:bg-accent hover:text-accent-foreground';
    case 'link':
      return 'text-primary underline-offset-4 hover:underline';
    default:
      return 'bg-primary text-primary-foreground hover:bg-primary/90';
  }
});

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'h-9 px-3 rounded-md';
    case 'lg':
      return 'h-11 px-8 rounded-md';
    case 'icon':
      return 'h-10 w-10';
    default:
      return 'h-10 px-4 py-2';
  }
});
</script>
