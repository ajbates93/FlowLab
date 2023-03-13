<template>
  <div class="md:p-5 bg-[#eee] text-[#333] dark:text-[#eee] dark:bg-black">
    <div class="rounded-3xl overflow-hidden shadow-lg border dark:border-transparent flex">
      <SideNavigation />
      <div class="bg-[#F5F4F7] dark:bg-[#222] flex-grow">
        <Header />
        <section class="container p-5">
          <slot />
        </section>
      </div>
    </div>
  </div>
</template>