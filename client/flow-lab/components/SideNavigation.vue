<template>
  <aside class="h-screen bg-white dark:bg-[#111] md:w-1/6 w-1/5" id="sideNavigation">
    <div id="logo">
      <NuxtLink to="/" class="px-3 py-5 flex items-center text-2xl font-bold text-[#333] dark:text-[#ccc]">
        <picture class="mr-3">
          <img src="/images/fl-logo.png" alt="Flow Lab Logo" width="70" height="70" />
        </picture>
        <span class="tracking-wide title">FlowLab</span>
      </NuxtLink>
    </div>
    <div class="mt-5 py-2 px-5 uppercase font-bold tracking-wider title">Management</div>
    <ul class="">
      <li class="py-2 px-5"><NuxtLink class="font-semibold flex items-center dark:text-[#aaa] hover:dark:text-[#fff]" active-class="dark:text-[#fff]" to="/content"><Icon name="iconoir:edit" class="mr-3"/>Content</NuxtLink></li>
      <li class="py-2 px-5"><NuxtLink class="font-semibold flex items-center dark:text-[#aaa] hover:dark:text-[#fff]" active-class="dark:text-[#fff]" to="/models"><Icon name="iconoir:database-settings" class="mr-3"/>Models</NuxtLink></li>
      <li class="py-2 px-5"><NuxtLink class="font-semibold flex items-center dark:text-[#aaa] hover:dark:text-[#fff]" active-class="dark:text-[#fff]" to="/users"><Icon name="iconoir:add-user" class="mr-3"/>Users</NuxtLink></li>
      <li class="py-2 px-5"><NuxtLink class="font-semibold flex items-center dark:text-[#aaa] hover:dark:text-[#fff]" active-class="dark:text-[#fff]" to="/assets"><Icon name="iconoir:media-image" class="mr-3"/>Assets</NuxtLink></li>
    </ul>
    <div class="mt-5 py-2 px-5 uppercase font-bold tracking-wider title">Settings</div>
    <ul class="">
      <li class="py-2 px-5"><NuxtLink class="font-semibold flex items-center dark:text-[#aaa]" active-class="dark:text-[#fff]" to="/themes"><Icon name="ion:paintbrush" class="mr-3"/>Theme</NuxtLink></li>
      <li class="py-2 px-5"><NuxtLink class="font-semibold flex items-center dark:text-[#aaa]" active-class="dark:text-[#fff]" to="/admin"><Icon name="iconoir:settings" class="mr-3"/>Admin</NuxtLink></li>
    </ul>
  </aside>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>