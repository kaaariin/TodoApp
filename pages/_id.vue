<template>
  <div>
      <Listitems :post="messages"></Listitems>
    <Upform></Upform>
  </div>
</template>
<script>
import Listitems from "~/components/Listitems.vue";
import Upform from "~/components/upform.vue";
import { db } from "~/plugins/firebase";
import { firebase } from "~/plugins/firebase";

export default {
  components: {
    Listitems,
    Upform
  },
  
  data() {
    return {
      messages: [],
    };
  },
  
  mounted() {
    db.collection("listitem").orderBy('createdAt')
    .onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        const doc = change.doc
        if(change.type === 'added') {
          this.messages.push({id: doc.id, ...doc.data()})
        }
      })
    })
  },
 
}
</script>

<style>
</style>
