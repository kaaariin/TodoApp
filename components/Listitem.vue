<template>
  <label class="checkbox">
    <input type="checkbox" v-if="listcheck" />
    <input type="checkbox" v-else v-on:change="doneitem(); deleteitem();" />
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
      this.$emit("delete-item",this.listcheck);
      if(this.listcheck === true) {
        this.listcheck === false
      }
    },
    doneitem() {
      this.$emit("done-item","listcheck");
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
