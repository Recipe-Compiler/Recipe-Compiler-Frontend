<template>
  <v-app :style="cssProps">
    <v-main>
      <div>
        <GlobalToolbar />
      </div>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import GlobalToolbar from "@/components/common/GlobalToolbar.vue";

export default Vue.extend({
  name: "App",

  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require("@/assets/background.svg")})`,
      },
      user: null,
    };
  },
  components: {
    GlobalToolbar,
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
