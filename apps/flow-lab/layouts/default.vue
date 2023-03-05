<template>
  <div>
    <header class="flex items-center justify-start bg-[#fafafa] border-b">
      <div class="logo p-3">
        <picture>
          <img src="/images/fl-logo.png" alt="Flow Lab Logo" width="70" height="70" />
        </picture>
      </div>
      <h1 class="p-3 text-[#04bf73] text-3xl font-bold">Flow Lab</h1>
    </header>
    <div class="flex">
      <aside class="h-screen border-r bg-[#fafafa]" id="sideNavigation">
        <ul>
          <li class="py-3 px-5">Content Management</li>
          <li class="py-3 px-5">User Management</li>
        </ul>
      </aside>
      <section class="container p-5">
        <slot />
  
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>