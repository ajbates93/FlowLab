<template>
  <div>
    <h3 class="text-3xl font-bold">{{ $route.meta.title }}</h3>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Admin'
})
</script>

<style scoped>

</style>