<template>
  <div>
    <div class="checklists">
      <Listitem></Listitem>
    </div>
    <div class="done checklists">
      <DoneListitem></DoneListitem>
    </div>
    <Upform></Upform>
  </div>
</template>
<script>
import Listitem from "~/components/Listitem.vue";
import DoneListitem from "~/components/doneListitem.vue";
import Upform from "~/components/upform.vue";

export default {
  components: {
    Listitem,
    DoneListitem,
    Upform
  }
};
</script>

<style>
</style>
