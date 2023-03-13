<template>
  <div class="xl:p-10 md:p-5 bg-[#eee] text-[#333] dark:text-[#eee] dark:bg-slate-900">
    <div class="rounded-3xl overflow-hidden shadow-lg border dark:border-transparent flex">
      <aside class="h-screen bg-white dark:bg-[#22223b] md:w-1/6 w-1/5" id="sideNavigation">
        <div id="logo" class="px-3 py-5 flex items-center text-2xl font-bold text-[#333] dark:text-[#ccc]">
          <picture class="mr-3">
            <img src="/images/fl-logo.png" alt="Flow Lab Logo" width="70" height="70" />
          </picture>
          <span>FlowLab</span>
        </div>
        <div class="mt-5 py-2 px-5 uppercase text-[#ccc] font-semibold tracking-wider">Management</div>
        <ul class="">
          <li class="py-2 px-5 font-semibold"><Icon name="iconoir:edit" class="mr-1"/> Content</li>
          <li class="py-2 px-5 font-semibold"><Icon name="iconoir:add-user" class="mr-1"/>Users</li>
          <li class="py-2 px-5 font-semibold"><Icon name="iconoir:media-image" class="mr-1"/>Assets</li>
          <li class="py-2 px-5 font-semibold"><Icon name="iconoir:database-settings" class="mr-1"/>Model</li>
        </ul>
      </aside>
      <div class="bg-[#F5F4F7] dark:bg-[#4a4e69] flex-grow">
        <header class="py-2 px-5 items-center border-b flex justify-between">
          <h1 class="p-3 text-3xl font-bold">HCI York</h1>
          <div class="p-3">
            <div>
              <button @click="handleToggleMode">Toggle Mode</button>
            </div>
            <div>
              Logged in as <span class="font-bold">Alex Bates - HCI</span>
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

definePageMeta({
  title: 'FlowLab',
  description: 'FlowLab is a content management system for HCI York',
  keywords: 'hci, york, content, management, system',
  image: '/images/fl-logo.png',
  // url: 'https://flowlab.hci.york.co.uk'
})

const colorMode = useColorMode()

const handleToggleMode = () => {
  console.log(colorMode.preference)
  colorMode.preference === 'dark' ? colorMode.preference = 'light' : colorMode.preference = 'dark'
}

</script>

<style scoped>

</style>