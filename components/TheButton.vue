<template>
  <div>
    <NuxtLink
      to="/about"
      class="inline-block px-6 py-3 font-semibold text-white uppercase bg-tertiary rounded hover:bg-primary font-Cinzel"
    >
      {{ title }}
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
    default: "Title",
  },
});
</script>

<style scoped></style>
