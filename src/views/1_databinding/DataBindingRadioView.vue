<template>
  <div>
    <!-- 라디오는 체크박스와 사용법이 같지만 바인딩 되는 데이터는 문자열 -->
    <input type="radio" name="" id="html" value="html" v-model="favoriteLang" />
    <label for="html">Html</label>
  </div>
  <div>
    <input type="radio" name="" id="CSS" value="CSS" v-model="favoriteLang" />
    <label for="CSS">CSS</label>
  </div>
  <div>
    <input type="radio" name="" id="JaS" value="JaS" v-model="favoriteLang" />
    <label for="JS">JS</label>
  </div>
  {{ favoriteLang }}
</template>
<script>
export default {
  components: {},
  data() {
    return {
      favoriteLang: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
