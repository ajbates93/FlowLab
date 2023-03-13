<template>
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
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const handleToggleMode = () => {
  console.log(colorMode.preference)
  colorMode.preference === 'dark' ? colorMode.preference = 'light' : colorMode.preference = 'dark'
}
</script>