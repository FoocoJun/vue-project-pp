<template>
  <div>
    <!-- v-for을 이용해 리스트 처리 가능 반복을 원하면 사용 -->
    <!-- 매개변수를 두개 두면 index 값도 사용 가능 -->
    <!-- 단 React와 동일하게 반복에 대해 유일한 key값을 제공해야 함 -->
    <select name="" id="">
      <option value=""></option>
      <option
        :value="city.code"
        v-for="city in cities"
        :key="city.code + '123213'"
      >
        {{ city.title }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      cities: [
        { title: '서울', code: '02' },
        { title: '부산', code: '051' },
        { title: '제주', code: '064' }
      ]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
