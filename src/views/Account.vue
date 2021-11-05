<template>
  <v-container>
    <v-col class="ml-5 mt-5 px-5">
      <h1>Account Details</h1>
      <v-row>
        <v-main class="mt-4 mb-4"> Email: </v-main>
        <v-main class="mt-4 mb-4">${{ user.email }}</v-main>
      </v-row>
      <v-row>
        <v-main class="mt-4 mb-4"> Username: </v-main>
        <v-main class="mt-4 mb-4">${{ user.username }}</v-main>
      </v-row>
      <v-row>
        <v-main class="mt-4 mb-4"> First Name: </v-main>
        <v-main class="mt-4 mb-4">${{ user.firstname }}</v-main>
      </v-row>
      <v-row>
        <v-main class="mt-4 mb-4"> Last Name: </v-main>
        <v-main class="mt-4 mb-4">${{ user.lastname }}</v-main>
      </v-row>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import App from "@/App.vue";
import { mapActions } from "vuex";
export default Vue.extend({
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    this.user = this.getUser();
  },
  methods: {
    getUser() {
      if (localStorage.user) {
        return JSON.parse(localStorage.user);
      } else {
        return {};
      }
    },
  },
});
</script>
