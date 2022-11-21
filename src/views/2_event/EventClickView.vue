<template>
  <div>
    <!-- methods에 함수를 정의하고 이벤트에 제공하여 사용 가능 -->
    <input type="text" v-model.number="num1" />
    <input type="text" v-model.number="num2" />
    <button @click="Add">Add 1</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      num1: 0,
      num2: 0
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    Add() {
      this.num1 = this.num1 + this.num2
    }
  }
}
</script>
