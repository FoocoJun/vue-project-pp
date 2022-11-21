<template>
  <div>
    <!-- 클래스엔 오브젝트 형식으로 true false 값을 제공하여 트리거 할 수 있다 -->
    <!-- 클래스엔 배열 형태로도 제공 가능하다 -->
    <div :class="{ 'text-red': hasError, active: isActive }">sdf</div>
    <div :class="class2">클래스 바인딩2</div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      isActive: false,
      hasError: false,
      class2: ['active', 'text-red']
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
<style scoped>
.active {
  background-color: greenyellow;
  font-weight: bold;
}
.text-red {
  color: red;
}
</style>
