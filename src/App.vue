<template>
  <v-app :style="cssProps">
    <v-bottom-navigation
      color="white"
      style="background-color: #fd6359"
      grow
      height="50px"
    >
      <v-btn
        style="text-color: white; background-color: #fd6359"
        height="50px"
        @click="Home"
      >
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
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require("@/assets/background.svg")})`,
      },
    };
  },
  methods: {
    Home() {
      this.$router.push("/");
    },
  },
});
</script>
