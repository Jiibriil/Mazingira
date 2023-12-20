<template>
  <div>
    <TheHeader title="What we do" />
    <div v-for="(service, index) in services">
      <TheCard
        :title="service.title"
        :description="service.description"
        :img="service.image"
        v-if="services"
      />
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/services");
let services = ref(data.value.services);

JSON.stringify(services.value);
</script>

<style scoped></style>
