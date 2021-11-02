<template>
  <v-form>
    <h1>Your results for {search input}</h1>
    <v-btn color="">Filter</v-btn>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
export default Vue.extend({
  data() {
    return {
      tableHeader: [
        {
          text: "Recipe Name",
          align: "start",
        },
      ],
    };
  },
  methods: {
    Home() {
      this.$router.push("/");
    },
  },
});
</script>