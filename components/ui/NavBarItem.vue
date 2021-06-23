<template>
  <nuxt-link v-if="nuxt" tag="div" :to="to">
    <slot />
  </nuxt-link>
  <div v-else-if="external" :href="to">
    <slot />
  </div>
  <div v-else>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'NavBarItem',
  props: {
    to: {
      type: String,
      required: false,
      default: null,
    },
    nuxt: {
      type: Boolean,
      required: false,
      default: false,
    },
    external: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>

<style lang="postcss" scoped>
div {
  @apply px-4 py-2 hover:bg-indigo-300 cursor-pointer;
}
</style>
