<template>
  <div>
    <div
      class="max-w-sm rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <div>
        <img class="rounded-t-lg" src="/images/img1.webp" alt="" />
      </div>
      <div class="p-5">
        <a href="#">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
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
    default: "/images/img1.webp",
  },
});

onMounted(() => {
  initFlowbite();
});
</script>

<style scoped></style>
