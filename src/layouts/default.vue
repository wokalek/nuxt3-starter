<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader />
    <div class="flex-grow">
      <slot />
    </div>
    <TheFooter />
  </div>
</template>
