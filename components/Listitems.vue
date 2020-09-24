<template>
  <div>
    <div class="checklists" id="checklists">
      <label class="checkbox" v-for="listitem in this.post" @change="addDonelist">
        <input type="checkbox" />
        {{listitem.text}}
      </label>
    </div>
    <div class="donechecklists" id="addDonelists">
    </div>
  </div>
</template>
<script>
import { db, firebase } from "~/plugins/firebase";

export default {
  props: ["post"],

  components: {},
  mounted() {},
  methods: {
    addDonelist(e) {
      const addDonelist = document.querySelector("#addDonelists");
      const list = e.target.parentNode;
      list.remove();
      addDonelist.appendChild(list);
      const line = document.createElement('hr');
      list.appendChild(line);
    },
    addCheclist(e) {
      const addChecklists = document.querySelector("#checklists");
      const list = e.target.parentNode;
      list.remove();
      addChecklists.appendChild(list);
    }
  }
};
</script>
<style >
.checklists,
.donechecklists {
  margin: 0 auto;
  font-size: 30px;
  text-align: left;
  margin-top: 50px;
}
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
  position: relative;
}
.done {
  position: relative;
}
hr {
  width: 100%;
  border-color: #999999;
  top: 18px;
  position: absolute;
}
.donechecklists {
  margin: 30px auto;
  font-size: 30px;
  text-align: left;
  margin-top: 50px;
  position: relative;
}
</style>
