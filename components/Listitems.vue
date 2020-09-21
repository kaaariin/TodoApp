<template>
  <div class="checklists">
     <Listitem v-for="message in post" :messagepost="message" v-on:delete-item="deleted"></Listitem>
  </div>
</template>
<script>
import Listitem from "~/components/Listitem.vue";
import { db,firebase } from "~/plugins/firebase";

export default {
  props: ["post"],
  components: {
    Listitem
  },
  mounted() {
    console.log(this.post);
  },
   methods: {
      deleted(index) {
          this.post.splice(index,1);
      }
  }
};
</script>
<style >
.checklists {
  margin: 0 auto;
  font-size: 30px;
  text-align: left;
  margin-top: 50px;
}
</style>
