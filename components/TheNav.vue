<template>
  <div class="">
    <NavigationMenuRoot class="px-4 py-2 bg-primary">
      <NavigationMenuList class="flex justify-between items-center">
        <NavigationMenuItem>
          <!-- logo  -->
          <NuxtImg src="/images/Logo.svg" alt="Nuxt Logo" class="h-12" />
          <h1></h1>
        </NavigationMenuItem>

        <!-- hamburger menu -->
        <NavigationMenuItem>
          <Icon name="ic:outline-sort" class="text-3xl" />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenuRoot>
  </div>
</template>

<script setup></script>

<style scoped></style>
