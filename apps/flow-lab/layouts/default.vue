<template>
  <div class="xl:p-10 md:p-5 bg-[#eee] text-[#333] dark:text-[#eee] dark:bg-black">
    <div class="rounded-3xl overflow-hidden shadow-lg border dark:border-transparent flex">
      <aside class="h-screen bg-white dark:bg-[#111] md:w-1/6 w-1/5" id="sideNavigation">
        <div id="logo" class="px-3 py-5 flex items-center text-2xl font-bold text-[#333] dark:text-[#ccc]">
          <picture class="mr-3">
            <img src="/images/fl-logo.png" alt="Flow Lab Logo" width="70" height="70" />
          </picture>
          <span class="tracking-wide title">FlowLab</span>
        </div>
        <div class="mt-5 py-2 px-5 uppercase font-semibold tracking-wider title">Management</div>
        <ul class="">
          <li class="py-2 px-5 font-semibold flex items-center text-[#cacaca]"><Icon name="iconoir:edit" class="mr-3"/>Content</li>
          <li class="py-2 px-5 font-semibold flex items-center text-[#cacaca]"><Icon name="iconoir:database-settings" class="mr-3"/>Models</li>
          <li class="py-2 px-5 font-semibold flex items-center text-[#cacaca]"><Icon name="iconoir:add-user" class="mr-3"/>Users</li>
          <li class="py-2 px-5 font-semibold flex items-center text-[#cacaca]"><Icon name="iconoir:media-image" class="mr-3"/>Assets</li>
        </ul>
        <div class="mt-5 py-2 px-5 uppercase font-semibold tracking-wider title">Settings</div>
        <ul class="">
          <li class="py-2 px-5 font-semibold flex items-center text-[#cacaca]"><Icon name="ion:paintbrush" class="mr-3"/>Theme</li>
          <li class="py-2 px-5 font-semibold flex items-center text-[#cacaca]"><Icon name="iconoir:settings" class="mr-3"/>Admin</li>
        </ul>
      </aside>
      <div class="bg-[#F5F4F7] dark:bg-[#222] flex-grow">
        <header class="py-2 px-5 items-center flex justify-between">
          <h1 class="p-3 text-3xl font-bold title">HCI York</h1>
          <div class="p-3 flex items-center">
            <div class="text-2xl p-3 border rounded-xl bg-white flex items-center dark:bg-[#111] border-[#333]">
              <Icon @click="handleToggleMode" 
                name="iconoir-settings"
                class="cursor-pointer mr-3" />
              <Icon @click="handleToggleMode" 
                :name="colorMode.preference === 'dark' ? 'iconoir:sun-light' : 'iconoir:half-moon'"
                class="cursor-pointer"
                :class="[{'text-yellow-300': colorMode.preference === 'dark'}]" />
            </div>
            <div class="ml-5 text-right">
              <div class="font-bold text-lg">Alex Bates</div>
              <div class="text-lg">HCI</div>
            </div>
          </div>
        </header>
        <section class="container p-5">
          <slot />
    
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const colorMode = useColorMode()

const handleToggleMode = () => {
  console.log(colorMode.preference)
  colorMode.preference === 'dark' ? colorMode.preference = 'light' : colorMode.preference = 'dark'
}

</script>

<style scoped>

</style>