<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { ref, watch } from "vue";
import Api from "../api";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: "men's clothing" | "women's clothing";
  rating: {
    rate: number;
    count: number;
  };
  image: string;
}

const route = useRoute();
const router = useRouter();

const index = ref(1);
const isLoading = ref(false);
const productAllowed = ["men's clothing", "women's clothing"];
const isProductAllowed = () => productAllowed.includes(products.value.category);
const isMenProduct = () => products.value.category === "men's clothing";
const isWomenProduct = () => products.value.category === "women's clothing";
const products = ref<Product>({
  id: 1,
  title: "Product Title",
  description: "Product Description",
  category: "women's clothing",
  image: "https://loremflickr.com/1280/720",
  rating: {
    rate: 4.5,
    count: 100,
  },
  price: 200000,
});

const fetchProduct = async (id: string | number | string[]) => {
  try {
    isLoading.value = true;
    const response = await Api.get(`/products/${route.params.id || index}`);
    products.value = response.data;
    isLoading.value = false;
  } catch (error) {
    console.error(error);
    isLoading.value = false;
  } finally {
    isLoading.value = false;
  }
};

// Untuk memantau perubahan pada route.params.id
watch(
  () => route.params.id,
  (newId) => {
    // Untuk memastikan newId ada sebelum fetch data baru
    if (newId) {
      fetchProduct(newId);
    }
  },
  { immediate: true } // 'immediate: true' agar watch berjalan saat komponen dimuat pertama kali
);

const handleNextProduct = () => {
  let currentIndex = Number(route.params.id);

  if (currentIndex < 20 && currentIndex > 0) {
    currentIndex++;
  } else {
    currentIndex = 1;
  }

  router.push(`/products/${currentIndex}`);
};
</script>

<template>
  <div
    :class="
      isMenProduct() ? 'bg-man' : isWomenProduct() ? 'bg-women' : 'bg-default'
    "></div>

  <div class="card-product">
    <div v-if="isLoading" class="loading-wrapper">
      <div class="loader"></div>
    </div>
    <div v-if="!isLoading && isProductAllowed()" class="product-container">
      <img :src="products.image" :alt="products.title" />
      <div class="product-detail">
        <h2 :class="isMenProduct() ? 'man-title' : 'woman-title'">
          {{ products.title }}
        </h2>
        <div class="product-category-rating">
          <p>{{ products.category }}</p>
          <p>{{ products.rating.rate }}</p>
        </div>
        <hr />
        <div class="product-description">
          <p>{{ products.description }}</p>
        </div>
        <div class="spacer"></div>
        <hr />
        <div
          :class="isMenProduct() ? 'product-price-man' : 'product-price-women'">
          <p>$ {{ products.price }}</p>
        </div>
        <div class="product-button">
          <button :class="isMenProduct() ? 'btn-buy-man' : 'btn-buy-women'">
            Buy Now
          </button>
          <button
            @click="handleNextProduct"
            :class="isMenProduct() ? 'btn-next-man' : 'btn-next-women'">
            Next Product
          </button>
        </div>
      </div>
    </div>
    <div v-if="!isLoading && !isProductAllowed()" class="not-allowed">
      <div class="overlay-content">
        <p>This product is unavailable to show</p>
        <button @click="handleNextProduct" class="btn-next-not-allowed">
          Next Product
        </button>
      </div>
    </div>
  </div>
</template>
