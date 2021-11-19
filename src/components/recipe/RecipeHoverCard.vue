<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card class="mx-auto">
        <v-card-text>
          <h2 class="text-h6 primary--text">{{ recipe.name }}</h2>
          by {{ recipe.author || "Unknown" }}
        </v-card-text>
        <small class="ml-2"> Tags: </small>
        <v-container class="ma-0 pa-0">
          <v-chip
            v-for="tag in recipe.tags"
            :key="tag.id"
            small
            class="ma-1"
            color="success"
            dark
          >
            {{ tag.name }}</v-chip
          >
        </v-container>
        <v-container class="ma-0 pa-0">
          <v-card-title class="justify-center"> Ingredients</v-card-title>
          <v-list-item v-for="n in 3" :key="n">
            <v-list-item-icon
              ><v-icon>mdi-numeric-{{ n }}-circle</v-icon></v-list-item-icon
            >
            {{ recipe.ingredients[n].displayName }}
          </v-list-item>
          <v-list-item
            v-if="recipe.ingredients.length > 3"
            class="text-center justify-center"
          >
            <small>{{ recipe.ingredients.length - 3 }} more</small>
          </v-list-item>
        </v-container>
        <v-fade-transition>
          <v-overlay v-if="hover" absolute color="orange">
            <v-btn @click="$router.push('recipe/' + recipe.id)"
              >See more info</v-btn
            >
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template></v-hover
  >
</template>
<script lang="ts">
import Vue from "vue";
//import Service from "@/service";
export default Vue.extend({
  props: {
    recipe: Object,
    hover: Boolean,
  },
  data() {
    return {};
  },
});
</script>
