<template>
  <div>
  </div>
</template>
<script>
import { db } from "~/plugins/firebase";


export default {
  mounted() {
    console.log(this.$store.getters.isAuthenticated)
  }
};
</script>

<style>
</style>
