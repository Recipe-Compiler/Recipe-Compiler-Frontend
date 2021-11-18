<template>
  <v-form>
    <v-toolbar dark dense src="https://i.imgur.com/x6hfLlY.png">
      <v-spacer></v-spacer>
      <v-btn
        @click="$router.push(button.route)"
        width="100px"
        icon
        class="mr-3"
        v-for="(button, i) in buttons"
        :key="i"
      >
        <v-icon>
          {{ button.icon }}
        </v-icon>
        {{ button.text }}
      </v-btn>
      <v-spacer></v-spacer>
      <div v-if="user === null">
        <v-row>
          <v-col>
            <LoginDialog />
          </v-col>
          <v-col class="ml-2">
            <RegisterDialog />
          </v-col>
        </v-row>
      </div>
      <div v-else>
        <v-row>
          <v-col>
            <v-btn @click="clear"> Logout </v-btn>
          </v-col>
          <v-col>
            <UserInfoDialog />
          </v-col>
        </v-row>
      </div>
    </v-toolbar>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
//import { mapActions } from "vuex";
import LoginDialog from "../user/LoginDialog.vue";
import RegisterDialog from "../user/RegisterDialog.vue";
import UserInfoDialog from "../user/AccountMenu.vue";
//import Create from "../components/Create.vue";
export default Vue.extend({
  data() {
    return {
      user: null,
      buttons: [
        {
          icon: "mdi-home",
          text: "Home",
          route: "/",
        },
        {
          icon: "mdi-earth",
          text: "Explore",
          route: "explore",
        },
        {
          icon: "mdi-magnify",
          text: "Search",
          route: "search",
        },
        {
          icon: "mdi-food",
          text: "MealPlan",
          route: "MealPlan",
        },
        {
          icon: "mdi-bookmark",
          text: "Saved",
          route: "saved",
        },
      ],
    };
  },
  mounted() {
    this.user = JSON.parse(localStorage.user);
  },
  methods: {
    routeHome() {
      this.$router.push({ path: "/" });
    },

    routeExplore() {
      this.$router.push("Explore");
    },

    routeMealPlan(){
      this.$router.push("MealPlan")
    },

    routeSearch(dialog: any) {
      dialog.value = false;
      this.$router.push({ path: "/SearchResults" });
    },
    clear() {
      localStorage.user = null;
      this.$router.go(0);
    },
  },
  components: {
    LoginDialog,
    RegisterDialog,
    UserInfoDialog,
  },
});
</script>
