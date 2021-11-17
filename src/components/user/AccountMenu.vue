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
          <span class="text-h5">{{ user.message }} </span>
        </v-card-title>
        <v-card-text>
          <v-container> hello world! </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
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
        this.user = JSON.parse(localStorage.user);
      }
    },
  },
});
</script>
