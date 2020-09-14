<template>
  <div>
    <div class="checklists">
      <Listitems :post="messages"></Listitems>
    </div>
    <div class="done checklists">
      <DoneListitem></DoneListitem>
    </div>
    <Upform></Upform>
  </div>
</template>
<script>
import Listitems from "~/components/Listitems.vue";
import DoneListitem from "~/components/doneListitem.vue";
import Upform from "~/components/upform.vue";
import { db } from "~/plugins/firebase";

export default {
  components: {
    Listitems,
    DoneListitem,
    Upform
  },
  data() {
    return {
      messages: []
    };
  },
  mounted() {
    db.collection("listitem").get()
    .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        this.messages.push({id: doc.id, ...doc.data()})
    });
    console.log(this.messages);
});

  }
}
</script>

<style>
</style>
