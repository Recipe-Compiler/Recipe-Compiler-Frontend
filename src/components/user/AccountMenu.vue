<template>
  <v-row justify="center">
    <v-menu v-model="menu" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="mt-3"
          color="amber darken-3"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-account</v-icon>
          My Account
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Account Details: {{ user.username }} </span>
        </v-card-title>
        <v-card-text>
          <v-container>{{ user }}</v-container>
        </v-card-text>
        <v-card-actions>
          <v-col>
            <v-btn @click="clear"> Logout </v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-btn color="primary darken-1" text @click="dialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </v-row>
</template>
<script lang="ts">
import Vue from "vue";
import Service from "@/service";
export default Vue.extend({
  data() {
    return {
      menu: false,
      user: null,
    };
  },
  mounted() {
    this.loadUser();
  },
  methods: {
    loadUser() {
      if (localStorage.user != null) {
        //this.user = JSON.parse(localStorage.user);
        this.getUserDetails(JSON.parse(localStorage.user).userId);
      }
    },
    getUserDetails(userId: string) {
      Service.get(
        process.env.VUE_APP_API + "User/GetUserById/" + userId,
        this.getUserDetailsCallback
      );
    },
    getUserDetailsCallback(status: any, data: any) {
      console.log(status);
      this.user = data;
    },
    clear() {
      localStorage.user = null;
      this.$router.go(0);
    },
  },
});
</script>
