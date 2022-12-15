<template>
  <div class="hello">
    <h1>HelloWorld</h1>
    <el-menu>123</el-menu>

    <el-button type = "success">success</el-button>
    <el-button type = "danger">danger</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style lang="less">
.hello {
   background: yellow;
  //  .el-button {
  //     color: red;
  //  }
}

</style>>