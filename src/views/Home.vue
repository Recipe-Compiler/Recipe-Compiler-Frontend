<template>
  <v-form>
    <v-bottom-navigation color="white" style="background-color: #fd6359" grow height="50px">
      <v-btn style="text-color: white; background-color: #fd6359" height="50px">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn style="text-color: white; background-color: #fd6359" height="50px">
        <span>Explore</span>
        <v-icon>mdi-earth</v-icon>
      </v-btn>
      <v-btn style="text-color: white; background-color: #fd6359" height="50px">
        <span>Search</span>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn style="text-color: white; background-color: #fd6359" height="50px">
        <span>Meal Prep</span>
        <v-icon>mdi-food</v-icon>
      </v-btn>
      <v-btn style="text-color: white; background-color: #fd6359" height="50px">
        <span>Bookmarks</span>
        <v-icon>mdi-bookmark</v-icon>
      </v-btn>
    </v-bottom-navigation>
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
