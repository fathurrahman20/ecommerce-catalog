<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="landing-container">
    <div class="info-card">
      <h1>Welcome to Catalog.</h1>
      <p>
        This project was developed as part of the Project Based Internship
        program by Core Initiative in collaboration with Rakamin Academy.
      </p>

      <p class="features-title">Key Features Include:</p>

      <ul class="features-list">
        <li>Dynamic data fetching from the live Fake Store API.</li>
        <li>Interactive navigation to cycle through products.</li>
        <li>A modern, component-based structure using Vue.js.</li>
      </ul>

      <div class="button-wrapper">
        <RouterLink to="/products/1" class="cta-button"
          >Explore Products</RouterLink
        >
      </div>
    </div>
  </div>
</template>
