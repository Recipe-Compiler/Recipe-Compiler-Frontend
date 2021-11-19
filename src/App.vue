<template>
  <v-app :style="cssProps">
    <v-main>
      <div>
        <GlobalToolbar />
      </div>
      <router-view />
    </v-main>
    <v-snackbar v-model="snackbar.active">
      {{ snackbar.message }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar.active = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import GlobalToolbar from "@/components/common/GlobalToolbar.vue";
import { mapState } from "vuex";
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
  computed: {
    ...mapState(["snackbar"]),
  },
});
</script>
