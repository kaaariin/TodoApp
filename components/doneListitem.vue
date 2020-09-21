<template>
  <label class="checkbox">
        <チェックされたListitem v-for:donemessage in donemessages>{{donemessage.text}}</チェListitem>
    <hr />
  </label>
</template>
<script>
import Listitem from "~/components/Listitem.vue";
import { db,firebase } from "~/plugins/firebase";


export default {
  props: ["post"],
  components: {
    Listitem
  },
  data() {
    return {
      donemessages:[]
    }
  },
  
  methods: {
    doneitem() {
      this.donemessages.push()//何をプッシュすれば？？
    }
  }
}
</script>
<style>
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