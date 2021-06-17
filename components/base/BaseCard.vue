<template>
  <div>
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
div {
  @apply flex flex-col justify-center
  bg-purple-200 w-auto rounded-lg shadow-md 
  px-2 py-2 my-1 mx-4 max-w-md
  hover:bg-purple-300;
}
</style>
