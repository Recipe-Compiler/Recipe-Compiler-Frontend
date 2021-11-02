<template>
  <v-form>
    <v-col class="pt-15">
      <h1 align="center" style="color: #7d312c">
        Welcome to The Recipe Compiler!
      </h1>
      <h3 align="center" style="color: #7d312c">
        Please either log into your existing account or create a new account.
      </h3>
      <v-row justify="center" class="mb-4 mt-4 mr-4 ml-4">
        <v-col cols="5"></v-col>
        <v-col cols="1" justify="center">
          <v-btn color="red" :center="true" :absolute="true">Login</v-btn>
        </v-col>
        <v-col cols="1" justify="center">
          <v-btn color="red" :center="true" :absolute="true"
            >create Account</v-btn
          >
        </v-col>
        <v-col cols="5"></v-col>
      </v-row>
      <v-row class="mt-4 mb-4">
        <v-col cols="4">
          <v-card class="mt-4 mb-4" height="300" shaped elevation="4">
            <span>Recipe 1</span>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="mt-4 mb-4" height="300" shaped elevation="4">
            <span>Recipe 2</span>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="mt-4 mb-4" height="300" shaped elevation="4">
            <span>Recipe 3</span>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
export default Vue.extend({});
</script>

<style></style>
