<template>
  <div class="py-6">
    <h1>
      <span class="text-3xl font-bold text-tertiary uppercase font-Cinzel">
        {{ title }}
      </span>
    </h1>
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
