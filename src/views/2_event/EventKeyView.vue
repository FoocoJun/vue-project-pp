<template>
  <div>
    <input
      type="search"
      name=""
      id=""
      @keyup="checkEnter($event)"
      v-model="searchText"
    />
    <button @click="doSearch">조회</button>
  </div>
  <!-- 아래와 같이 속성을 이용해 간소화 가능 -->
  <!-- 두개 동시 적용 가능 -->
  <!-- stop 적용시 stopPropagation -->
  <!-- prevent 적용시 preventDefault -->
  <div>
    <input
      type="search"
      name=""
      id=""
      @keyup.prevent.enter.alt="doSearch"
      v-model="searchText"
    />
    <button @click="doSearch">조회</button>
  </div>
</template>
<script>
// .enter
// .tab.art
// .delete
// .esc
// .space
// .up
// .down
// .left
// .right

export default {
  components: {},
  data() {
    return {
      searchText: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doSearch() {
      console.log(this.searchText)
    },
    checkEnter(e) {
      if (e.keyCode === 13) {
        this.doSearch()
      }
    }
  }
}
</script>
