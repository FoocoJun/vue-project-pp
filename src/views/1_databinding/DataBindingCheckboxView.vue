<template>
  <div>
    <!-- 체크박스와 바인딩 되는 데이터는 배열이어야 한다. -->
    <input
      type="checkbox"
      name=""
      id="html"
      value="html"
      v-model="favoriteLang"
    />
    <label for="html">Html</label>
  </div>
  <div>
    <input
      type="checkbox"
      name=""
      id="CSS"
      value="CSS"
      v-model="favoriteLang"
    />
    <label for="CSS">CSS</label>
  </div>
  <div>
    <input
      type="checkbox"
      name=""
      id="JaS"
      value="JaS"
      v-model="favoriteLang"
    />
    <label for="JS">JS</label>
  </div>
  {{ favoriteLang }}
</template>
<script>
export default {
  components: {},
  data() {
    return {
      favoriteLang: ['JaS']
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
