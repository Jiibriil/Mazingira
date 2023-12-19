<template>
  <div
    class="max-w-sm rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-4 bg-white"
  >
    <div>
      <NuxtImg
        class="rounded-t-lg h-52 w-full object-cover"
        :src="img"
        alt="service card"
        sizes="sm:300px md:500px lg:800px xl:1000px"
        loading="lazy"
      />
    </div>
    <div class="p-5">
      <a href="#">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-Cinzel"
        >
          {{ title }}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 font-Laila">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { initFlowbite } from "flowbite";

defineProps({
  title: {
    type: String,
    required: true,
    default: "Title",
  },
  img: {
    type: String,
    required: true,
    default: "/images/img8.webp",
  },
  description: {
    type: String,
    required: true,
    default: "Description",
  },
});

// turn imageProp to string

onMounted(() => {
  initFlowbite();
});
</script>

<style scoped></style>
