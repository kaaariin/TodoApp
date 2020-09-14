<template>
  <div class="checklists">
     <Listitem v-for="message in post" :messagepost="message"></Listitem>
  </div>
</template>
<script>
import Listitem from "~/components/Listitem.vue";
export default {
  props: ["post"],
  components: {
    Listitem
  },
  mounted() {
    console.log(this.post);
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
