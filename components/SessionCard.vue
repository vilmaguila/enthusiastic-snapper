<template>
  <base-card>
    <div class="head">Instrument: {{ instrument }}</div>
    <div class="guru">Teacher: {{ guru }}</div>
    <div class="time">Time: {{ time }}</div>
  </base-card>
</template>

<script>
export default {
  name: 'SessionCard',
  props: {
    guru: {
      type: String,
      required: true,
    },
    instrument: {
      type: String,
      required: false,
      default: 'Voice',
    },
    time: {
      type: String,
      required: true,
    },
  },
}
</script>
