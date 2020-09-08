<template>
  <label class="checkbox">
    <input type="checkbox" name />{{itemPoint}}
  </label>
</template>
<script>
export default {
    data() {
        return {
            item:'洗濯'
        }
    },
    computed: {
   itemPoint() {
     return `${this.item}！`
   }
 }
}
</script>

<style>
.form {
  width: 500px;
  margin: 0 auto;
}
.checklists {
  margin: 0 auto;
  font-size: 30px;
  text-align: left;
  margin-top: 50px;
}
input[type="checkbox"] {
  width: 20px;
  height: 20px;
  margin-right: 30px;
}
.checkbox {
  display: block;
  border-bottom: solid 1px #cccccc;
  padding: 10px 0;
}
.done {
  position: relative;
}
hr {
  position: absolute;
  width: 100%;
  border-color: #999999;
  top: 18px;
}
</style>
