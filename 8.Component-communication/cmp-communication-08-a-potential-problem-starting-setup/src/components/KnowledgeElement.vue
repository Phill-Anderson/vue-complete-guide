<template>
  <!-- <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <button @click="$emit('select-topic', id)">Learn More</button>
  </li> -->
  <li>
    <h3>{{ topic.title }}</h3>
    <p>{{ topic.description }}</p>
    <button @click="$emit('select-topic', topic.id)">Learn more me</button>
  </li>
</template>

<script>
export default {
  props: ['id', 'topicName', 'description', 'topic'],
  emits: ['select-topic'],
};
</script>
