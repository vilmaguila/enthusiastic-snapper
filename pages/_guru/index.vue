<template>
  <div>
    <h1>This is {{ guru }}'s Intro page</h1>
    <cool-link :to="guru + '/sessions'">Available sessions</cool-link>
    <cool-link :to="guru + '/projects'">Projects</cool-link>
    <cool-link :nuxt="false" to="https://www.google.fi"
      >Yeah, take me to Google</cool-link
    >
  </div>
</template>

<script>
export default {
  layout: 'base',
  asyncData({ params }) {
    const guru = params.guru
    return { guru }
  },
}
</script>
