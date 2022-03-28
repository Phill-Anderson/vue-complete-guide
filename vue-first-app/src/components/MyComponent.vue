<template>
  <div>
    <h1>hello my component</h1>
    <p>{{ innerState }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      innerState: "bi bol dotood state",
    };
  },
  methods: {},
};
</script>
