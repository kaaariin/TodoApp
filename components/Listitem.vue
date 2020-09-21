<template>
  <label class="checkbox">
    <input type="checkbox" v-model="listcheck" v-if="listcheck">
    <input type="checkbox" v-model="listcheck" v-else v-on:change="deleteitem; doneitem">
    {{messagepost.text}}
  </label>
</template>
<script>
import { db, firebase } from "~/plugins/firebase";
export default {
  props: ["messagepost"],
  data() {
    return {
      listcheck: false
    };
  },
  methods: {
    deleteitem() {
      this.$emit('delete-item')
      if(this.listcheck == true) {
      }
    },
    doneitem() {
      this.$emit('done-item')
    }
  }
};
</script>

<style>
.form {
  width: 500px;
  margin: 0 auto;
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
