<template>
  <div>
    <base-avenue>
      <session-card :guru="guru" time="18-19" />
      <session-card instrument="Piano" />
    </base-avenue>
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
