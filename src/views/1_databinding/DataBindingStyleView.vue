<template>
  <!-- style을 직접 제공해도 되지만 동적으로 데이터와 바인딩 할 수 있음 -->
  <!-- 이때 객체 형태로 제공하되 카멜 케이스를 적용하여 제공 -->
  <div style="color: red; font-size: 30px">
    스타일 바인딩:글씨는 red,폰트크기:30px
  </div>
  <div :style="style1">스타일 바인딩:글씨는 green,폰트크기:30px</div>
  <button @click="style1.color = style1.color == 'green' ? 'blue' : 'green'">
    바꾸기
  </button>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      style1: {
        color: 'green',
        fontSize: '30px'
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
