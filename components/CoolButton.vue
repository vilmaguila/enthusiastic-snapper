<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CoolButton',
}
</script>

<style lang="postcss" scoped>
div {
  @apply max-w-max p-2 m-1 bg-gray-200 rounded-lg text-3xl
  hover:bg-gray-300 cursor-pointer;
}
</style>
