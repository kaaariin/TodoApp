<template>
  <div class="upform">
    <input type="text" v-on:click="login">
    <button>up</button>
  </div>
</template>
<script>
export default {
  methods: {
    login() {
      window.alert('ログインしてください')
    }
  }
}
</script>

<style scoped>
.upform {
  text-align-last: left;
  width: 100%;
  margin-top: 50px;
  position: relative;
}
input[type="text"] {
  width: 80%;
  height: 50px;
}
button {
  width: 60px;
  height: 50px;
  font-size: 30px;
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  box-sizing: border-box;
}
</style>