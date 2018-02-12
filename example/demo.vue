<template>
  <div class="page-demo">
    <div class="box" v-scroll-fixed>
      1
    </div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  name: 'Demo'
}
</script>

<style lang="scss">
body {
  margin: 0;
}
.page-demo {
  height: 2000px;
}
.box {
  width: 100px;
  height: 100px;
  background-color: rgba(200, 200, 200, .6);
  margin-left: 40px;
  margin-top: 40px;
}

.scroll-box {
  width: 300px;
  height: 100px;
  overflow: auto;
  border: 1px solid red;
}
</style>
