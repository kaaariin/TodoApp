<template>
  <div class="container">
    <h1 class="title">todoリスト</h1>
    <div class="form">
      <nuxt />
    </div>
  </div>
</template>
<script>
import { db,firebase } from "~/plugins/firebase";
import { mapActions} from 'vuex'

export default {
  data() {
    return {
      channels: []
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    ...mapActions(['setUser'])
  },
  mounted () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setUser(user)
      }
    }
    )}
}
</script>
<style>
body {
  background-color: #ffff99;
}
.container {
  text-align: center;
  width: 920px;
  margin: 0 auto;
}
</style>
