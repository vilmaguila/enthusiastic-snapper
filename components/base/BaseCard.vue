<template>
  <div>
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
div {
  @apply flex flex-row bg-purple-200 w-auto rounded-lg hover:bg-purple-300;
}
</style>
