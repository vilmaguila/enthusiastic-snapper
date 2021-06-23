<template>
  <nuxt-link v-if="nuxt" tag="div" :to="to">
    <slot />
  </nuxt-link>
  <div v-else :href="to">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CoolLink',
  props: {
    to: {
      type: String,
      required: true,
    },
    nuxt: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
div {
  @apply max-w-max p-2 m-1 bg-gray-200 rounded-lg text-3xl
  hover:bg-gray-300 cursor-pointer;
}
</style>
