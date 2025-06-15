<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  rating: {
    type: Number,
    required: true,
  },
  isManProduct: {
    type: Boolean,
    required: true,
  },
});

const roundedRating = computed(() => Math.round(props.rating));
</script>

<template>
  <div class="rating-container">
    <span class="rating-text">{{ props.rating.toFixed(1) }}/5</span>

    <div class="circles-wrapper">
      <span v-for="circle in 5" :key="circle">
        <svg
          v-if="circle <= roundedRating"
          :class="
            isManProduct
              ? 'circle circle-filled-man'
              : 'circle circle-filled-women'
          "
          viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
        </svg>

        <svg
          v-else
          :class="
            isManProduct
              ? 'circle circle-empty-man'
              : 'circle circle-empty-women'
          "
          viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
        </svg>
      </span>
    </div>
  </div>
</template>
