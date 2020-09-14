<template>
  <div class="container">
    <h1 class="title">todoリスト</h1>
    <div class="form">
      <nuxt />
    </div>
  </div>
</template>
<script>
import { db } from "~/plugins/firebase";

export default {
 
}
</script>
<style>
body {
  background-color: #ffff99;
}
.container {
  text-align: center;
  width: 920px;
  margin: 0 auto;
}
</style>
