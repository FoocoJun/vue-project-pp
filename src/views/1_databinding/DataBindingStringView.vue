<template>
  <div>
    <!-- {{}} 사용 시 데이터 제공 -->
    <h1>Hello {{ userName }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: 'John Doe',
      message: '',
      arr: [],
      abj: {}
    }
  }
}
</script>
