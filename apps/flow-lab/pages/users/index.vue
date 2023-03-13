<template>
  <div>
    <h3 class="text-3xl font-bold">{{ $route.meta.title }}</h3>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Dashboard'
})
</script>

<style scoped>

</style>