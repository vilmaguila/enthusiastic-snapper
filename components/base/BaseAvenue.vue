<template>
  <div>
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
div {
  @apply flex flex-col rounded-l justify-items-center
  p-1 m-1 max-w-lg shadow-md bg-indigo-100;
}
</style>
