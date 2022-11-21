<template>
  <div>{{ this.$store.state.count }}</div>
  <button @click="increment">증가</button>
  <button @click="decrement">감소</button>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    increment() {
      this.$store.commit('increment')
      this.$store.commit('increment')
    },
    decrement() {
      this.$store.commit('decrement')
      this.$store.commit('decrement')
    }
  }
}
</script>
