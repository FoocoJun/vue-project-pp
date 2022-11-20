<template>
  <!-- v-html 시 InnerHtml로 데이터 제공 -->
  <div v-html="htmlString"></div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      htmlString: '<p style="color:red;">빨간색 문자</p>'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
