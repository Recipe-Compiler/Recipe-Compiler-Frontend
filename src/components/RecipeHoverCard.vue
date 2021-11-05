<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card class="mx-auto" max-width="344" height="500">
        <v-card-text>
          <h2 class="text-h6 primary--text">{{ recipe.name }}</h2>
          {{ recipe.description }}
        </v-card-text>

        <v-card-title>
          <v-rating
            :value="4"
            dense
            color="orange"
            background-color="orange"
            hover
            class="mr-2"
          ></v-rating>
          <span class="primary--text text-subtitle-2">64 Reviews</span>
        </v-card-title>

        <v-fade-transition>
          <v-overlay v-if="hover" absolute color="#036358">
            <v-btn>See more info</v-btn>
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template></v-hover
  >
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    recipe: Object,
    hover: Boolean,
  },
});
</script> 