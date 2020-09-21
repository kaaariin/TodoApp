<template>
  <div class="upform">
    <textarea v-model="text" v-if="isAuthenticated" v-on:keydown.enter="addMessage"></textarea>
    <textarea v-model="text" v-else v-on:click="openLoginModal"></textarea>

    <p v-if="isAuthenticated" class="logout" v-on:click="logout">ログアウト</p>
    <el-dialog title :visible.sync="dialogVisible" width="30%">
      <div class="image-container">
        <img src="~/assets/btn_google_signin.png" v-on:click="login" />
      </div>
    </el-dialog>
    <!-- <p class="logout" v-on:click="logout">ログアウト</p> -->
  </div>
</template>
<script>
import { db, firebase } from "~/plugins/firebase";
import Vue from "vue";
import { mapActions } from "vuex"; //mutationを使う時
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
export default {
  data() {
    return {
      dialogVisible: false,
      text: null
    };
  },
  computed: {
    isAuthenticated() {
      console.log(this.$store.getters.isAuthenticated);
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    ...mapActions(["setUser"]), //mutationに定義したメソッドを読みこむことができる
    openLoginModal() {
      this.dialogVisible = true;
    },
    addMessage(event) {
      // if(event.keyCode === 229){return}
      console.log(event);
      if (this.keyDownedForJPConversion(event)) {
        return;
      }
      db.collection("listitem")
        .add({
          text: this.text,
          createdAt: new Date().getTime()
        })
        .then(() => {
          this.text = null;
        });
    },
    keyDownedForJPConversion(event) {
      const codeForConversion = 229;
      return event.keyCode === codeForConversion;
    },
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          const user = result.user;
          this.setUser(user);
          this.dialogVisible = false;
        })
        .catch(error => {
          window.alert(error);
        });
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.setUser(null)
          window.alert("ログアウトに成功！");
          console.log(this.$store.state.user);
        })
        .catch(e => {
          window.alert("ログアウトに失敗しました");
          console.log(e);
        });
    }
  }
};
</script>

<style scoped>
.upform {
  text-align-last: left;
  width: 100%;
  margin-top: 50px;
  position: relative;
}
textarea {
  width: 80%;
  height: 50px;
}
button {
  width: 60px;
  height: 50px;
  font-size: 30px;
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  box-sizing: border-box;
}
.image-container {
  display: flex;
  justify-content: center;
}
img {
  width: 70%;
  cursor: pointer;
}
.logout {
  cursor: pointer;
}
</style>