<template>
  <v-form>
    <v-col cols="8">
      <v-row>
        <h1>Your results for {search input}</h1>
        <v-btn>Filter</v-btn>
      </v-row>
      <v-row>
        <v-card
          class="pt-7 pb-7 pr-7 pl-7"
          elevation="4"
          shaped
          v-ripple="{ class: `orange--text` }"
          @click="viewRecipe"
        >
          <v-row><span class="headline">Recipe</span></v-row>
          <v-row>
            <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>
            <div class="grey--text ms-4">4.5 (413)</div>
          </v-row>
          <v-row>
            <div class="my-4 text-subtitle-1">Time • Dish type, Difficulty</div>
          </v-row>
        </v-card>
      </v-row>
    </v-col>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
export default Vue.extend({
  methods: {
    viewRecipe() {
      // route to the correct recipe page
      return 0;
    },
  },
});
</script>